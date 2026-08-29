import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPath from "@/assets/hero-path.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rotina Produtiva — Ritmo Que Funciona" },
      {
        name: "description",
        content:
          "Um sistema prático para organizar prioridades, proteger o foco e sustentar o que importa. Guia em 8 pilares, 14 capítulos e um plano de 4 semanas.",
      },
      { property: "og:title", content: "Rotina Produtiva — Ritmo Que Funciona" },
      {
        property: "og:description",
        content:
          "Prioridades claras, blocos de tempo, menos distrações. O sistema completo para uma rotina que se sustenta.",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  { n: "01", t: "3 Prioridades Diárias", d: "Defina o que realmente importa." },
  { n: "02", t: "Próximo Passo Específico", d: "Transforme tarefas grandes em ações simples." },
  { n: "03", t: "Blocos de Tempo", d: "Dê espaço na agenda ao que importa." },
  { n: "04", t: "Gestão de Distrações", d: "Proteja o seu foco." },
  { n: "05", t: "Energia Mapeada", d: "Trabalhe com os seus melhores horários." },
  { n: "06", t: "Regra dos 2 Minutos", d: "Reduza a barreira para começar." },
  { n: "07", t: "Revisão Semanal", d: "Ajuste o sistema constantemente." },
  { n: "08", t: "Modo Reduzido", d: "Mantenha o essencial mesmo nos dias difíceis." },
];

const PROBLEMS = [
  "Falta de prioridades claras",
  "Tudo parece urgente",
  "Tarefas grandes parecem impossíveis de começar",
  "Não existe um horário claro para executar",
  "Notificações e distrações quebram o foco",
];

const CHAPTERS = [
  "Por que força de vontade não é suficiente",
  "O método das 3 prioridades diárias",
  "Quebrando tarefas grandes em passos executáveis",
  "Blocos de tempo: a base de uma rotina que funciona",
  "Gerenciando distrações digitais",
  "Entendendo seus picos e vales de energia",
  "A regra dos 2 minutos",
  "Erros comuns que sabotam a produtividade",
  "Criando um ritual de início de dia",
  "Lidando com o modo sobrecarga",
  "Revisão semanal",
  "Produtividade e descanso",
  "Ajustando o sistema para dias imprevisíveis",
  "Resumo rápido: os pilares do sistema",
];

const WEEKS = [
  { w: "Semana 1", t: "Fundamentos", d: "Defina as suas prioridades e comece pelo próximo passo." },
  {
    w: "Semana 2",
    t: "Estrutura de Tempo",
    d: "Organize blocos de tempo e descubra os seus horários de maior energia.",
  },
  {
    w: "Semana 3",
    t: "Ajustes Finos",
    d: "Reduza distrações e aplique a regra dos 2 minutos.",
  },
  {
    w: "Semana 4",
    t: "Sustentação",
    d: "Faça a sua revisão semanal e crie o seu modo reduzido.",
  },
];

const CHECKLIST = [
  "Definir 3 prioridades",
  "Escolher o próximo passo específico",
  "Criar blocos de tempo",
  "Controlar notificações",
  "Mapear níveis de energia",
  "Aplicar a regra dos 2 minutos",
  "Criar um ritual de início",
  "Fazer uma revisão semanal",
  "Fazer pausas regulares",
  "Criar um modo reduzido",
];

const STORAGE_KEY = "rotina-produtiva-checklist";

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-6">
        <span className="font-display text-base text-coral">{number}</span>
        <span className="eyebrow">{children}</span>
      </div>
      <span className="mt-4 block h-px w-12 bg-coral" />
    </div>
  );
}

function Cta({ children, wide = false }: { children: string; wide?: boolean }) {
  return (
    <a
      href="#checklist"
      className={`group inline-flex items-center justify-between gap-8 border border-ink bg-ink px-8 text-primary-foreground transition-colors duration-500 hover:bg-transparent hover:text-ink ${
        wide ? "h-16 min-w-full text-sm sm:min-w-[22rem]" : "h-14 text-xs"
      }`}
    >
      <span className="font-semibold uppercase tracking-[0.18em]">{children}</span>
      <span className="translate-x-0 transition-transform duration-500 group-hover:translate-x-1.5">
        →
      </span>
    </a>
  );
}

function Index() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = { ...prev, [item]: !prev[item] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const done = CHECKLIST.filter((i) => checked[i]).length;

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-20 md:px-10 md:pt-20 md:pb-32">
        <div className="grid items-stretch gap-10 border-l-2 border-coral pl-6 md:grid-cols-12 md:pl-10">
          <div className="flex flex-col justify-between py-6 md:col-span-6 md:py-10">
            <Reveal>
              <span className="eyebrow">Rotina Produtiva</span>
              <span className="mt-3 block h-px w-12 bg-coral" />
            </Reveal>

            <Reveal delay={80} className="mt-14 md:mt-0">
              <h1 className="display text-[clamp(3.5rem,11vw,8rem)] text-ink">
                <span className="block">Ritmo</span>
                <span className="block">Que</span>
                <span className="block">Funciona</span>
              </h1>
              <span className="mt-8 block h-px w-16 bg-coral" />
              <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
                Um sistema prático para organizar prioridades, proteger o foco e sustentar o que
                importa.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-14 md:mt-16">
              <Cta>Começar agora</Cta>
              <p className="eyebrow mt-10">Guia Prático</p>
              <span className="mt-3 block h-px w-12 bg-coral" />
            </Reveal>
          </div>

          <Reveal delay={140} className="md:col-span-6">
            <img
              src={heroPath}
              alt="Ilustração de um caminho sinuoso a subir colinas até um sol nascente"
              width={1200}
              height={1504}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>


      {/* PROBLEM */}
      <section className="border-t border-hairline bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="01">O Problema</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display max-w-3xl text-[clamp(2rem,6vw,4.25rem)] normal-case tracking-[-0.03em]">
              Trabalha o dia todo…
              <span className="block text-ink-soft">mas sente que não avançou?</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
            <Reveal delay={80} className="md:col-span-5">
              <p className="text-base leading-relaxed text-ink-soft">
                Na maioria dos casos, o problema não é preguiça nem falta de disciplina. Você tenta,
                esforça-se, trabalha horas — e ainda assim o dia termina sem progresso real.
              </p>
              <p className="mt-10 display text-[clamp(1.25rem,2.6vw,1.9rem)]">
                O problema real é estrutural.
              </p>
            </Reveal>

            <Reveal delay={140} className="md:col-span-7">
              <ul>
                {PROBLEMS.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-baseline gap-6 border-t border-hairline py-5 last:border-b"
                  >
                    <span className="font-display text-xs text-ink-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="mt-20 border-t border-ink pt-8 md:mt-28">
            <p className="eyebrow">O que vai construir</p>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed md:text-2xl">
              Um sistema simples baseado em prioridades, blocos de tempo, redução de distrações,
              gestão de energia e ação prática.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="02">O que vai aprender</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-[clamp(2.25rem,7vw,5.5rem)]">O sistema em 8 pilares</h2>
          </Reveal>

          <div className="mt-16 md:mt-24">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 40}
                className="grid grid-cols-1 gap-2 border-t border-hairline py-8 last:border-b md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="display col-span-2 text-[clamp(2rem,4vw,3rem)] text-ink-soft">
                  {p.n}
                </span>
                <h3 className="display col-span-5 text-[clamp(1.25rem,2.4vw,1.85rem)] normal-case tracking-[-0.02em]">
                  {p.t}
                </h3>
                <p className="col-span-5 text-base text-ink-soft">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="border-t border-hairline bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal className="mb-12 flex items-baseline gap-6 md:mb-16">
            <span className="font-display text-sm text-paper/50">03</span>
            <span className="eyebrow text-paper/50">Método destacado</span>
          </Reveal>

          <div className="grid gap-16 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-5">
              <span className="display block text-[clamp(9rem,26vw,20rem)] leading-none">3</span>
            </Reveal>
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h2 className="display text-[clamp(1.9rem,4.5vw,3.25rem)]">
                  O método das 3 prioridades
                </h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
                  Todos os dias, escolha apenas 3 tarefas que fariam do seu dia um sucesso.
                </p>
              </Reveal>

              <Reveal delay={160} className="mt-14 border border-paper/20 p-8 md:p-10">
                <p className="eyebrow text-paper/50">Framework</p>
                <ol className="mt-8">
                  {["Liste tudo", "Escolha o que tem mais impacto", "Foque apenas nas 3 prioridades"].map(
                    (s, i) => (
                      <li
                        key={s}
                        className="flex items-baseline gap-6 border-t border-paper/15 py-5 first:border-t-0 first:pt-0"
                      >
                        <span className="font-display text-xs text-paper/50">{i + 1}</span>
                        <span className="text-lg">{s}</span>
                      </li>
                    ),
                  )}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="04">Sistema vs. Motivação</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display max-w-3xl text-[clamp(2rem,6vw,4.25rem)] normal-case tracking-[-0.03em]">
              Não precisa de mais motivação.
              <span className="block text-ink-soft">Precisa de um sistema.</span>
            </h2>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-soft">
              A motivação desaparece — normalmente no dia em que mais precisa dela. Um sistema reduz
              o número de decisões que tem de tomar e torna a ação o caminho mais fácil.
            </p>
          </Reveal>

          <div className="mt-16 grid border-t border-hairline md:mt-24 md:grid-cols-2">
            <Reveal className="border-b border-hairline py-10 md:border-b-0 md:border-r md:pr-12">
              <p className="eyebrow">Sem sistema</p>
              <ul className="mt-8">
                {["Decidir constantemente", "Adiar tarefas", "Sentir-se sobrecarregado", "Reagir ao dia"].map(
                  (i) => (
                    <li
                      key={i}
                      className="border-t border-hairline py-4 text-lg text-ink-soft first:border-t-0 first:pt-0"
                    >
                      {i}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={120} className="py-10 md:pl-12">
              <p className="eyebrow text-ink">Com sistema</p>
              <ul className="mt-8">
                {[
                  "Saber o que fazer",
                  "Ter prioridades claras",
                  "Proteger blocos de foco",
                  "Ajustar quando algo corre mal",
                ].map((i) => (
                  <li
                    key={i}
                    className="border-t border-hairline py-4 text-lg first:border-t-0 first:pt-0"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="border-t border-hairline bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="05">Dentro do guia</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-[clamp(2.25rem,7vw,5rem)]">14 capítulos</h2>
          </Reveal>

          <div className="mt-16 grid md:mt-24 md:grid-cols-2 md:gap-x-16">
            {CHAPTERS.map((c, i) => (
              <Reveal
                key={c}
                delay={(i % 2) * 60}
                className="flex items-baseline gap-6 border-t border-hairline py-6 md:gap-8"
              >
                <span className="eyebrow shrink-0">Cap. {String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg leading-snug">{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="06">4 Semanas</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display text-[clamp(2.25rem,7vw,5.5rem)]">Plano de ação</h2>
          </Reveal>

          <div className="mt-16 md:mt-24">
            {WEEKS.map((w, i) => (
              <Reveal
                key={w.w}
                delay={i * 60}
                className="group grid gap-4 border-t border-hairline py-10 last:border-b md:grid-cols-12 md:items-baseline md:gap-8 md:py-14"
              >
                <div className="md:col-span-3">
                  <span className="eyebrow">{w.w}</span>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-px w-full bg-ink/20 transition-colors duration-700 group-hover:bg-ink" />
                    <span className="font-display text-xs text-ink-soft">
                      0{i + 1}/04
                    </span>
                  </div>
                </div>
                <h3 className="display md:col-span-4 text-[clamp(1.5rem,3vw,2.25rem)]">{w.t}</h3>
                <p className="md:col-span-5 text-base leading-relaxed text-ink-soft">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="border-t border-hairline bg-accent/60">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <SectionLabel number="07">Prática</SectionLabel>
          </Reveal>
          <Reveal delay={60} className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[clamp(2.25rem,7vw,4.5rem)]">Checklist final</h2>
            <span className="font-display text-sm tracking-tight text-ink-soft">
              {String(done).padStart(2, "0")} / {CHECKLIST.length}
            </span>
          </Reveal>

          <Reveal delay={100} className="mt-6 h-px w-full bg-hairline">
            <div
              className="h-px bg-ink transition-all duration-700"
              style={{ width: `${(done / CHECKLIST.length) * 100}%` }}
            />
          </Reveal>

          <ul className="mt-12">
            {CHECKLIST.map((item, i) => {
              const on = !!checked[item];
              return (
                <Reveal as="li" key={item} delay={i * 30}>
                  <button
                    type="button"
                    onClick={() => toggle(item)}
                    aria-pressed={on}
                    className="flex w-full items-center gap-6 border-t border-hairline py-5 text-left transition-opacity duration-500 hover:opacity-70"
                  >
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center border transition-colors duration-300 ${
                        on ? "border-ink bg-ink text-primary-foreground" : "border-ink/40"
                      }`}
                    >
                      {on ? <span className="text-[0.6rem] leading-none">✓</span> : null}
                    </span>
                    <span
                      className={`text-lg transition-colors duration-300 ${
                        on ? "text-ink-soft line-through" : ""
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-hairline bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-44">
          <Reveal>
            <p className="eyebrow text-paper/50">Agora, escolha o próximo passo.</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-12 text-[clamp(2.75rem,12vw,9rem)]">
              <span className="block">As 3 prioridades</span>
              <span className="block text-paper/45">de amanhã.</span>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-12 border-t border-paper/20 pt-12 md:grid-cols-12">
            <Reveal delay={120} className="md:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-paper/70">
                “Você não precisa aplicar tudo de uma vez. Escolha um passo e comece.”
              </p>
            </Reveal>
            <Reveal delay={200} className="md:col-span-6 md:flex md:justify-end">
              <a
                href="#checklist"
                className="group inline-flex h-16 w-full items-center justify-between gap-8 border border-paper/40 px-8 transition-colors duration-500 hover:border-paper hover:bg-paper hover:text-ink sm:w-auto sm:min-w-[24rem]"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Começar a minha rotina
                </span>
                <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 md:px-10">
          <span className="eyebrow">Rotina Produtiva</span>
          <span className="eyebrow">Ritmo que funciona</span>
        </div>
      </footer>
    </main>
  );
}
