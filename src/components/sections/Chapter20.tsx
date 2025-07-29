import { PhysicsCard } from "@/components/ui/physics-card";
import { Formula } from "@/components/ui/formula";

export function Chapter20() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-physics-entropy">
            Capítulo 20 - Segunda Lei da Termodinâmica
          </h2>
          <p className="text-xl text-muted-foreground">
            Direção dos processos e conceito de entropia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PhysicsCard
            title="Direção Natural dos Processos"
            icon="🔁"
            variant="entropy"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Princípios fundamentais que governam a direção dos processos térmicos
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-physics-temperature rounded-full"></span>
                  <span>Calor flui espontaneamente do quente para o frio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-physics-work rounded-full"></span>
                  <span>Nem toda energia térmica pode ser convertida em trabalho útil</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-physics-entropy rounded-full"></span>
                  <span>Processos irreversíveis aumentam a entropia</span>
                </div>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Máquinas Térmicas"
            icon="🔥"
            variant="temperature"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Dispositivos que convertem calor em trabalho mecânico
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Funcionamento:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Recebem calor QH da fonte quente</li>
                  <li>• Rejeitam calor QC para fonte fria</li>
                  <li>• Produzem trabalho W = QH - QC</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Eficiência Térmica:</h4>
                <Formula variant="block">
                  e = W/QH = 1 - QC/QH
                </Formula>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Ciclo de Carnot"
            icon="♻️"
            variant="work"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ciclo teórico com máxima eficiência possível
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Eficiência Máxima:</h4>
                <Formula variant="block">
                  e_Carnot = 1 - TC/TH
                </Formula>
                <p className="text-sm text-muted-foreground mt-2">
                  onde TC e TH são as temperaturas absolutas das fontes fria e quente
                </p>
              </div>
              
              <div className="bg-muted/20 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Nenhuma máquina térmica pode ter eficiência maior que a de Carnot 
                  operando entre as mesmas temperaturas.
                </p>
              </div>
            </div>
          </PhysicsCard>

          <PhysicsCard
            title="Refrigeradores e Bombas de Calor"
            icon="❄️"
            variant="work"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Dispositivos que transferem calor da fonte fria para a quente
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Coeficiente de Performance:</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Refrigerador:</span>
                    <Formula variant="block">
                      K = QC/W
                    </Formula>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium">Bomba de Calor:</span>
                    <Formula variant="block">
                      K = QH/W
                    </Formula>
                  </div>
                </div>
              </div>
            </div>
          </PhysicsCard>
        </div>

        <PhysicsCard
          title="Entropia (S)"
          icon="📈"
          variant="entropy"
          className="mt-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-4">Conceito</h4>
              <p className="text-muted-foreground mb-4">
                Medida da desordem e irreversibilidade dos processos termodinâmicos
              </p>
              
              <div>
                <h5 className="font-semibold mb-2">Variação de Entropia:</h5>
                <Formula variant="block">
                  ΔS = Qrev/T
                </Formula>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Princípios</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-physics-entropy rounded-full mt-2 flex-shrink-0"></span>
                  <span>A entropia do universo nunca diminui</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-physics-entropy rounded-full mt-2 flex-shrink-0"></span>
                  <span>Processos reversíveis: ΔS = 0</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-physics-entropy rounded-full mt-2 flex-shrink-0"></span>
                  <span>Processos irreversíveis: ΔS &gt; 0</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-physics-entropy rounded-full mt-2 flex-shrink-0"></span>
                  <span>Sistema isolado: entropia sempre aumenta</span>
                </div>
              </div>
            </div>
          </div>
        </PhysicsCard>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="text-center p-6 bg-gradient-to-br from-physics-temperature/10 to-physics-temperature/5 rounded-lg border border-physics-temperature/20">
            <h3 className="text-2xl font-bold text-physics-temperature mb-2">e = 1 - TC/TH</h3>
            <p className="text-sm text-muted-foreground">Eficiência de Carnot</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-physics-work/10 to-physics-work/5 rounded-lg border border-physics-work/20">
            <h3 className="text-2xl font-bold text-physics-work mb-2">K = QC/W</h3>
            <p className="text-sm text-muted-foreground">COP Refrigerador</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-physics-entropy/10 to-physics-entropy/5 rounded-lg border border-physics-entropy/20">
            <h3 className="text-2xl font-bold text-physics-entropy mb-2">ΔS ≥ 0</h3>
            <p className="text-sm text-muted-foreground">Princípio da Entropia</p>
          </div>
        </div>
      </div>
    </section>
  );
}