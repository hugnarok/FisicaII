import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-hero border-t border-border/20 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-thermal bg-clip-text text-transparent">
              Termodinâmica
            </h3>
            <p className="text-muted-foreground">
              Domine os conceitos fundamentais da física térmica através de uma 
              abordagem clara e estruturada.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-physics-temperature">Capítulos</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Capítulo 17 - Temperatura e Calor</div>
              <div>Capítulo 18 - Propriedades Térmicas</div>
              <div>Capítulo 19 - Primeira Lei</div>
              <div>Capítulo 20 - Segunda Lei</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>Material educacional de Termodinâmica - Física Térmica</p>
        </div>
      </div>
    </footer>
  );
}