import { PhysicsCard } from "@/components/ui/physics-card";
import { Formula } from "@/components/ui/formula";

export function Chapter19() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-physics-energy">
            Capítulo 19 - Primeira Lei da Termodinâmica
          </h2>
          <p className="text-xl text-muted-foreground">
            Conservação de energia em sistemas térmicos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PhysicsCard
            title="Energia Interna"
            icon="♻️"
            variant="energy"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Energia total das moléculas do sistema, dependente apenas da temperatura
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Para Gás Ideal Monoatômico:</h4>
                <Formula variant="block">
                  U = (3/2)nRT
                </Formula>
              </div>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  A energia interna depende apenas da temperatura em gases ideais, 
                  não da pressão ou volume.
                </p>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Primeira Lei"
            icon="🔁"
            variant="default"
            className="border-4 border-physics-energy/30"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Princípio da conservação de energia aplicado à termodinâmica
              </p>
              
              <Formula variant="block">
                ΔU = Q - W
              </Formula>
              
              <div className="grid gap-3 text-sm">
                <div>
                  <span className="font-semibold text-physics-energy">Q:</span> 
                  <span className="text-muted-foreground"> calor fornecido ao sistema</span>
                </div>
                <div>
                  <span className="font-semibold text-physics-work">W:</span> 
                  <span className="text-muted-foreground"> trabalho feito PELO sistema</span>
                </div>
                <div>
                  <span className="font-semibold text-physics-temperature">ΔU:</span> 
                  <span className="text-muted-foreground"> variação da energia interna</span>
                </div>
              </div>
            </div>
          </PhysicsCard>
        </div>

        <PhysicsCard
          title="Trabalho em Gases"
          icon="⚙️"
          variant="work"
          className="mt-8"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="font-semibold mb-3">Geral</h4>
              <Formula variant="block">
                W = ∫P dV
              </Formula>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Isobárico</h4>
              <Formula variant="block">
                W = PΔV
              </Formula>
              <p className="text-xs text-muted-foreground mt-2">P = constante</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Isotérmico</h4>
              <Formula variant="block">
                W = nRT ln(Vf/Vi)
              </Formula>
              <p className="text-xs text-muted-foreground mt-2">T = constante</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Adiabático</h4>
              <Formula variant="block">
                PVᵞ = constante
              </Formula>
              <p className="text-xs text-muted-foreground mt-2">Q = 0</p>
            </div>
          </div>
        </PhysicsCard>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <PhysicsCard
            title="Processos Termodinâmicos"
            icon="🧪"
            variant="default"
          >
            <div className="space-y-4">
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">Isotérmico:</span>
                  <span className="text-muted-foreground">T = constante, ΔU = 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Isocórico:</span>
                  <span className="text-muted-foreground">V = constante, W = 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Isobárico:</span>
                  <span className="text-muted-foreground">P = constante</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Adiabático:</span>
                  <span className="text-muted-foreground">Q = 0</span>
                </div>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Calores Específicos"
            icon="📏"
            variant="temperature"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Relações fundamentais para gases ideais
              </p>
              
              <div>
                <Formula variant="block">
                  Cp - Cv = R
                </Formula>
              </div>
              
              <div>
                <Formula variant="block">
                  γ = Cp/Cv
                </Formula>
              </div>
              
              <p className="text-sm text-muted-foreground">
                onde γ é o coeficiente adiabático
              </p>
            </div>
          </PhysicsCard>
        </div>
      </div>
    </section>
  );
}