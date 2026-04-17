import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { noResi } = body;

    // TODO: Integrasikan dengan API tracking kurir (JNE, Tiki, dll)
    // Contoh: Tiki API integration
    // const response = await fetch(`https://api.tiki.id/api/track/${noResi}`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.TIKI_API_KEY}`,
    //   },
    // });

    // Placeholder response
    const mockTracking = {
      noResi: noResi,
      status: "in_transit",
      lokasi: "Pusat Sortir Jakarta Pusat",
      estimasi: "2024-04-18",
      detail: "Paket sedang dalam perjalanan ke tujuan",
      history: [
        {
          tanggal: "2024-04-17 10:30",
          status: "Paket diterima pickup",
          lokasi: "Cabang Jakarta Timur",
        },
        {
          tanggal: "2024-04-17 14:15",
          status: "Paket disortir",
          lokasi: "Pusat Sortir Jakarta Pusat",
        },
        {
          tanggal: "2024-04-17 22:45",
          status: "Dalam perjalanan",
          lokasi: "In Transit",
        },
      ],
    };

    return NextResponse.json(mockTracking, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Gagal mengecek resi pengiriman" }, { status: 500 });
  }
}
