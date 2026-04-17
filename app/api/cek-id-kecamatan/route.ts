import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { namakecamatan } = body;

    // TODO: Integrasikan dengan database kecamatan atau API geografis
    // Bisa menggunakan data dari Kemendagri atau wilayah.id

    // Placeholder data - dalam implementasi nyata, ini akan dari database
    const kecamatanDatabase: Record<string, any> = {
      cengkareng: {
        id: "3173010",
        nama: "Cengkareng",
        kota: "Jakarta Barat",
        provinsi: "DKI Jakarta",
        kodePos: "11730",
      },
      cimahi: {
        id: "3203030",
        nama: "Cimahi",
        kota: "Bandung",
        provinsi: "Jawa Barat",
        kodePos: "40533",
      },
      ciputat: {
        id: "3674010",
        nama: "Ciputat",
        kota: "Tangerang Selatan",
        provinsi: "Banten",
        kodePos: "15412",
      },
    };

    const searchKey = namakecamatan.toLowerCase().replace(/\s+/g, "");
    const found = kecamatanDatabase[searchKey];

    if (found) {
      return NextResponse.json(found, { status: 200 });
    }

    // Jika tidak ditemukan, cari yang mirip
    const similarResults = Object.values(kecamatanDatabase).filter((item) => item.nama.toLowerCase().includes(namakecamatan.toLowerCase()));

    if (similarResults.length > 0) {
      return NextResponse.json(similarResults, { status: 200 });
    }

    return NextResponse.json({ error: "Kecamatan tidak ditemukan" }, { status: 404 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Gagal mengecek ID kecamatan" }, { status: 500 });
  }
}
