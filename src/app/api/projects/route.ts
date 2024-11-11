import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiUrl =
      "https://magicloops.dev/api/loop/run/862c9b1c-1a17-4a2f-88c2-7792bff1be98";
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error al obtener datos de la API externa" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error de servidor al intentar acceder a la API externa" },
      { status: 500 }
    );
  }
}
