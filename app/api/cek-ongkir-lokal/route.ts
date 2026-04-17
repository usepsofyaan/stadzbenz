import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { titikAsal, titikTujuan, berat } = body;

    // TODO: Integrasikan dengan API kurir lokal atau database tarif lokal
    // Bisa menggunakan tabel tarif yang sudah didefinisikan di database

    // Placeholder calculation
    const mockResult = {
      asal: titikAsal,
      tujuan: titikTujuan,
      berat: berat,
      biaya: Math.round(berat * 2000),
      estimasi: "1-2 jam",
      detail: "Ongkir lokal untuk area Jakarta dan sekitarnya",
      breakdown: {
        baseCost: 5000,
        weightCost: Math.round((berat - 1000) * 0.5),
        distance: "Dekat",
      },
    };

    return NextResponse.json(mockResult, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Gagal mengecek ongkir lokal" }, { status: 500 });
  }
}
