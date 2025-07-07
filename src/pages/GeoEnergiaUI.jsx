import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Compass, Layers3, Download } from "lucide-react";

export default function GeoEnergiaUI() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">GeoEnerGIA</h1>
        <p className="text-lg text-blue-700">
          Plataforma Inteligente para la Exploración Offshore en la Cuenca Guajira
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-900">Planificación de Misiones</h2>
            </div>
            <p className="text-sm text-gray-700">
              Define zonas de exploración y rutas óptimas para el vehículo marino autónomo (USV).
            </p>
            <Button className="mt-4" variant="secondary">Ver mapa</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layers3 className="text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-900">Datos Geológicos</h2>
            </div>
            <p className="text-sm text-gray-700">
              Carga, analiza y visualiza datos batimétricos, geoquímicos y estructurales.
            </p>
            <Button className="mt-4" variant="secondary">Subir archivos</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-900">Detección con IA</h2>
            </div>
            <p className="text-sm text-gray-700">
              Ejecuta modelos de IA para identificar geoformas asociadas a hidrocarburos.
            </p>
            <Button className="mt-4" variant="secondary">Analizar</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Download className="text-blue-800" />
              <h2 className="text-xl font-semibold text-blue-900">Cartografía</h2>
            </div>
            <p className="text-sm text-gray-700">
              Visualiza y exporta mapas morfoestructurales en formatos PDF y GeoTIFF.
            </p>
            <Button className="mt-4" variant="secondary">Descargar mapas</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
