import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// PUT update product
export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const { data, error } = await supabase
      .from("products")
      .update({
        name: body.name,
        description: body.description,
        price: body.price,
        category: body.category,
        image_url: body.image_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ message: "Gagal mengupdate produk" }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "Produk tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// DELETE product
export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ message: "ID produk tidak valid" }, { status: 400 });
    }

    // First check if product exists
    const { data: existingProduct, error: checkError } = await supabase.from("products").select("id").eq("id", id).single();

    if (checkError || !existingProduct) {
      console.error("Product not found:", checkError);
      return NextResponse.json({ message: "Produk tidak ditemukan" }, { status: 404 });
    }

    // Then delete
    const { error: deleteError } = await supabase.from("products").delete().eq("id", id);

    if (deleteError) {
      console.error("Supabase delete error:", deleteError);
      return NextResponse.json({ message: "Gagal menghapus produk", error: deleteError.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Produk berhasil dihapus", success: true });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
  }
}
