import { PhysicsCard } from "@/components/ui/physics-card";
import { Formula } from "@/components/ui/formula";

export function Chapter18() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-physics-work">
            Capítulo 18 - Propriedades Térmicas da Matéria
          </h2>
          <p className="text-xl text-muted-foreground">
            Comportamento molecular e propriedades dos gases
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PhysicsCard
            title="Gases Ideais"
            icon="⚙️"
            variant="work"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Modelo simplificado para gases em baixa densidade
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Equação de Estado:</h4>
                <Formula variant="block">
                  PV = nRT
                </Formula>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Para Densidade:</h4>
                <Formula variant="block">
                  ρ = PM/RT
                </Formula>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Modelo Cinético-Molecular"
            icon="🧪"
            variant="energy"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Gás composto por moléculas em movimento caótico
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Energia Cinética Média:</h4>
                <Formula variant="block">
                  K̄ = (3/2)kT
                </Formula>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Energia Total (n mols):</h4>
                <Formula variant="block">
                  U = (3/2)nRT
                </Formula>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Velocidade Molecular"
            icon="💨"
            variant="entropy"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Velocidade das moléculas em função da temperatura
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Velocidade Quadrática Média:</h4>
                <Formula variant="block">
                  v_rms = √(3kT/m) = √(3RT/M)
                </Formula>
                <p className="text-sm text-muted-foreground mt-2">
                  onde m é a massa molecular e M é a massa molar
                </p>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Calor Específico"
            icon="🧊"
            variant="temperature"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Capacidade de armazenar energia térmica
              </p>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Características:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Depende da estrutura molecular</li>
                  <li>• Relacionado aos graus de liberdade</li>
                  <li>• Varia com a temperatura</li>
                  <li>• Diferente para pressão e volume constantes</li>
                </ul>
              </div>
            </div>
          </PhysicsCard>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="text-center p-6 bg-gradient-to-br from-physics-work/10 to-physics-work/5 rounded-lg border border-physics-work/20">
            <h3 className="text-2xl font-bold text-physics-work mb-2">PV = nRT</h3>
            <p className="text-sm text-muted-foreground">Lei dos Gases Ideais</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-physics-energy/10 to-physics-energy/5 rounded-lg border border-physics-energy/20">
            <h3 className="text-2xl font-bold text-physics-energy mb-2">U = (3/2)nRT</h3>
            <p className="text-sm text-muted-foreground">Energia Interna</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-physics-entropy/10 to-physics-entropy/5 rounded-lg border border-physics-entropy/20">
            <h3 className="text-2xl font-bold text-physics-entropy mb-2">v = √(3RT/M)</h3>
            <p className="text-sm text-muted-foreground">Velocidade RMS</p>
          </div>
        </div>
      </div>
    </section>
  );
}