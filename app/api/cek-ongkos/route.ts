import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { kotaAsal, kecamatanAsal, kotaTujuan, kecamatanTujuan, berat, kurir } = body;

    // TODO: Integrasikan dengan API kurir yang sesuai (JNE, Tiki, Pos, dll)
    // Contoh integrasi dengan Rajaongkir API:
    // const response = await fetch('https://api.rajaongkir.com/starter/cost', {
    //   method: 'POST',
    //   headers: {
    //     'key': process.env.RAJAONGKIR_API_KEY || '',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: new URLSearchParams({
    //     origin: cityAsal,
    //     destination: cityTujuan,
    //     weight: berat.toString(),
    //     courier: kurir,
    //   }),
    // });

    // Placeholder response
    const mockResults = {
      origin: { city_name: kotaAsal, subdistrict: kecamatanAsal },
      destination: { city_name: kotaTujuan, subdistrict: kecamatanTujuan },
      weight: berat,
      courier: kurir,
      results: [
        {
          service: `${kurir.toUpperCase()} Express`,
          description: `Pengiriman Express via ${kurir}`,
          cost: [
            {
              value: Math.round(berat * 5000),
              etd: "1-2 hari",
            },
          ],
        },
        {
          service: `${kurir.toUpperCase()} Regular`,
          description: `Pengiriman Regular via ${kurir}`,
          cost: [
            {
              value: Math.round(berat * 3000),
              etd: "2-4 hari",
            },
          ],
        },
      ],
    };

    return NextResponse.json(mockResults, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Gagal mengecek ongkos kirim" }, { status: 500 });
  }
}
