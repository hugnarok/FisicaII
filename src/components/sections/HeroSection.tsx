import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-physics-temperature rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-physics-work rounded-full animate-pulse opacity-40 delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-physics-energy rounded-full animate-pulse opacity-30 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-physics-entropy rounded-full animate-pulse opacity-50 delay-700"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-thermal bg-clip-text text-transparent leading-tight">
            Termodinâmica
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore os fundamentos da transferência de calor, energia e entropia através dos 
            capítulos essenciais da física térmica
          </p>

          <div className="flex justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-heat hover:scale-105 transition-transform px-8 py-4 text-lg"
              onClick={() => document.getElementById('capitulos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🌡️ Iniciar Estudos
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-physics-temperature">17</div>
              <p className="text-sm text-muted-foreground">Temperatura & Calor</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-physics-work">18</div>
              <p className="text-sm text-muted-foreground">Propriedades Térmicas</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-physics-energy">19</div>
              <p className="text-sm text-muted-foreground">Primeira Lei</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-physics-entropy">20</div>
              <p className="text-sm text-muted-foreground">Segunda Lei</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}