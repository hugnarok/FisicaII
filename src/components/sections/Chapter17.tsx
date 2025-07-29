import { PhysicsCard } from "@/components/ui/physics-card";
import { Formula } from "@/components/ui/formula";

export function Chapter17() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-physics-temperature">
            Capítulo 17 - Temperatura e Calor
          </h2>
          <p className="text-xl text-muted-foreground">
            Fundamentos da energia térmica e transferência de calor
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PhysicsCard
            title="Temperatura e Equilíbrio Térmico"
            icon="🌡️"
            variant="temperature"
          >
            <p className="text-muted-foreground mb-4">
              A temperatura mede o nível de agitação molecular em um sistema.
            </p>
            
            <div className="bg-muted/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Lei Zero da Termodinâmica:</h4>
              <p className="text-sm text-muted-foreground">
                Se A está em equilíbrio térmico com B, e B está em equilíbrio com C, 
                então A e C também estão em equilíbrio térmico.
              </p>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Escalas Termométricas"
            icon="🌡️"
            variant="temperature"
          >
            <p className="text-muted-foreground mb-4">
              Principais escalas: Celsius (°C), Kelvin (K), Fahrenheit (°F)
            </p>
            
            <div className="space-y-3">
              <Formula variant="block">
                T(K) = T(°C) + 273,15
              </Formula>
              <Formula variant="block">
                T(°F) = (9/5)T(°C) + 32
              </Formula>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Dilatação Térmica"
            icon="🔧"
            variant="work"
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Linear:</h4>
                <Formula variant="block">
                  ΔL = αL₀ΔT
                </Formula>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Volumétrica:</h4>
                <Formula variant="block">
                  ΔV = βV₀ΔT
                </Formula>
                <p className="text-sm text-muted-foreground mt-2">
                  onde β ≈ 3α
                </p>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Calor e Capacidade Térmica"
            icon="🔥"
            variant="energy"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Calor (Q): energia térmica transferida por diferença de temperatura
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Calor Sensível:</h4>
                <Formula variant="block">
                  Q = mcΔT
                </Formula>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Calor Latente:</h4>
                <Formula variant="block">
                  Q = mL
                </Formula>
              </div>
            </div>
          </PhysicsCard>
        </div>

        <PhysicsCard
          title="Mecanismos de Transferência de Calor"
          icon="🔁"
          variant="default"
          className="mt-8"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-physics-work">Condução</h4>
              <Formula variant="block">
                H = kA(Tₕ - Tᶜ)/L
              </Formula>
              <p className="text-sm text-muted-foreground mt-2">
                Transferência através de contato direto
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-physics-temperature">Convecção</h4>
              <p className="text-sm text-muted-foreground">
                Movimento de massas de fluido (natural ou forçada)
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-physics-energy">Radiação</h4>
              <Formula variant="block">
                P = σAT⁴
              </Formula>
              <p className="text-sm text-muted-foreground mt-2">
                Transferência por ondas eletromagnéticas
              </p>
            </div>
          </div>
        </PhysicsCard>
      </div>
    </section>
  );
}