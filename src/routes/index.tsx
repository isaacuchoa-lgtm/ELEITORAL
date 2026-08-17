import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ComponentType } from "react";
import {
  BusFront,
  School,
  Sun,
  HeartPulse,
  BookHeart,
  Store,
  Sparkles,
  Star,
  Heart,
  Moon,
  Flower2,
  RotateCcw,
  Check,
  Undo2,
  PartyPopper,
} from "lucide-react";
import { doodleDataUri, SleepingFox } from "@/components/KawaiiDoodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema de Votação Kawaii — Julio 1 vs Julio 2" },
      {
        name: "description",
        content:
          "Urna eletrônica fofa e fictícia: conheça as propostas de Julio 1 e Julio 2, vote e acompanhe os resultados em tempo real.",
      },
      { property: "og:title", content: "Sistema de Votação Kawaii — Julio 1 vs Julio 2" },
      {
        property: "og:description",
        content: "Urna fictícia em estilo kawaii com votação e resultados em tempo real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Proposal = { icon: ComponentType<{ className?: string }>; text: string };

type Candidate = {
  id: "julio1" | "julio2";
  name: string;
  number: string;
  photo: string;
  bio: string;
  proposals: Proposal[];
  ringClass: string;
  buttonClass: string;
  barClass: string;
  tintClass: string;
};

const CANDIDATES: Candidate[] = [
  {
    id: "julio1",
    name: "Julio 1",
    number: "10",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Administrador público com 12 anos de experiência em gestão municipal e projetos de infraestrutura urbana.",
    proposals: [
      { icon: BusFront, text: "Transporte público gratuito aos domingos" },
      { icon: School, text: "Reforma de 50 escolas em 2 anos" },
      { icon: Sun, text: "Programa de energia solar em prédios públicos" },
    ],
    ringClass: "text-navy-soft",
    buttonClass: "bg-navy-soft text-card",
    barClass: "bg-navy-soft",
    tintClass: "bg-sky",
  },
  {
    id: "julio2",
    name: "Julio 2",
    number: "20",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Professor e pesquisador em políticas sociais, atuou por 8 anos na coordenação de programas de saúde comunitária.",
    proposals: [
      { icon: HeartPulse, text: "Postos de saúde abertos 24 horas" },
      { icon: BookHeart, text: "Bolsa de estudos para jovens da rede pública" },
      { icon: Store, text: "Incentivo fiscal para pequenos negócios locais" },
    ],
    ringClass: "text-teal-soft",
    buttonClass: "bg-teal-soft text-card",
    barClass: "bg-teal-soft",
    tintClass: "bg-mint",
  },
];

const FRAME_ICONS = [Star, Heart, Moon, Flower2, Sparkles];

function Index() {
  const [votes, setVotes] = useState<Record<Candidate["id"], number>>({
    julio1: 0,
    julio2: 0,
  });
  const [pending, setPending] = useState<Candidate | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const total = votes.julio1 + votes.julio2;
  const pct = useMemo(
    () => ({
      julio1: total ? (votes.julio1 / total) * 100 : 0,
      julio2: total ? (votes.julio2 / total) * 100 : 0,
    }),
    [votes, total],
  );

  const confirm = () => {
    if (!pending) return;
    setVotes((v) => ({ ...v, [pending.id]: v[pending.id] + 1 }));
    setSuccess(`Voto confirmado para ${pending.name} (${pending.number}) — obrigado!`);
    setPending(null);
    setTimeout(() => setSuccess(null), 4000);
  };

  return (
    <div className="dream-bg relative min-h-screen overflow-hidden px-3 py-6 sm:px-6 sm:py-10">
      <div
        aria-hidden
        className="doodle-layer pointer-events-none absolute inset-0"
        style={{ backgroundImage: doodleDataUri }}
      />
      <SleepingFox
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-4 w-28 text-lavender/70 sm:w-40"
      />

      {/* Kawaii browser frame */}
      <div className="relative mx-auto max-w-3xl rounded-[38px] bg-card/70 p-2 shadow-[var(--shadow-float)] ring-1 ring-border backdrop-blur-sm">
        <div className="flex items-center gap-2 rounded-t-[30px] bg-pink/50 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-pink" />
          <span className="h-3 w-3 rounded-full bg-lemon" />
          <span className="h-3 w-3 rounded-full bg-mint" />
          <div className="ml-3 flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-full bg-card/80 px-4 py-1.5 text-muted-foreground">
            {FRAME_ICONS.map((Icon, i) => (
              <Icon key={i} className="h-3.5 w-3.5 shrink-0" />
            ))}
            <span className="text-[11px] font-semibold tracking-wide">votacao.fofo</span>
            {FRAME_ICONS.map((Icon, i) => (
              <Icon key={`b-${i}`} className="h-3.5 w-3.5 shrink-0" />
            ))}
          </div>
        </div>

        <div className="rounded-b-[30px] bg-card/85 px-4 py-8 sm:px-8 sm:py-10">
          <header className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">
              Sistema de Votação
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Eleição fictícia para fins de demonstração
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-bold text-accent-foreground shadow-[var(--shadow-plush)]">
                <Sparkles className="h-4 w-4" />
                Votação Aberta
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-[var(--shadow-plush)]">
                <Heart className="h-4 w-4 fill-current" />
                {total} {total === 1 ? "voto" : "votos"}
              </span>
            </div>
          </header>

          {success && (
            <div
              role="status"
              className="mt-8 flex items-center gap-3 rounded-[26px] bg-lemon px-5 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-plush)]"
            >
              <PartyPopper className="h-5 w-5 shrink-0" />
              {success}
            </div>
          )}

          <section aria-label="Candidatos" className="mt-9 space-y-8">
            {CANDIDATES.map((c) => (
              <article key={c.id} className="card-plush p-6 sm:p-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className={`sparkle-ring rounded-full ${c.ringClass}`}>
                    <img
                      src={c.photo}
                      alt={`Foto do candidato ${c.name}`}
                      loading="lazy"
                      className="h-28 w-28 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold">{c.name}</h2>
                    <span
                      className={`mt-1 inline-flex items-center gap-1 rounded-full ${c.tintClass} px-3 py-1 text-xs font-bold tracking-wide text-foreground`}
                    >
                      <Star className="h-3.5 w-3.5" />
                      Número {c.number}
                    </span>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {c.bio}
                  </p>
                </div>

                <div className="mt-7">
                  <h3 className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground">
                    Propostas
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {c.proposals.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 rounded-[22px] bg-muted/70 px-4 py-3 text-sm font-medium"
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.tintClass}`}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setPending(c)}
                  className={`btn-plush mt-7 flex w-full items-center justify-center gap-2 px-6 py-5 font-display text-lg font-extrabold ${c.buttonClass}`}
                >
                  <Heart className="h-5 w-5 fill-current" />
                  Votar em {c.name}
                </button>
              </article>
            ))}
          </section>

          <section aria-label="Resultados" className="card-plush mt-10 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-xl font-extrabold">Painel de Resultados</h2>
              <button
                onClick={() => {
                  setVotes({ julio1: 0, julio2: 0 });
                  setSuccess(null);
                }}
                className="btn-plush inline-flex items-center gap-2 bg-lavender px-5 py-3 text-sm font-bold text-foreground"
              >
                <RotateCcw className="h-4 w-4" />
                Reiniciar Votação
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {CANDIDATES.map((c) => (
                <div key={c.id}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-bold">
                      {c.name} <span className="text-muted-foreground">({c.number})</span>
                    </span>
                    <span className="text-muted-foreground">
                      {votes[c.id]} votos · {pct[c.id].toFixed(1)}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={Math.round(pct[c.id])}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Votos de ${c.name}`}
                    className="mt-2 h-5 w-full overflow-hidden rounded-full bg-muted"
                  >
                    <div
                      className={`h-full rounded-full ${c.barClass} transition-[width] duration-500`}
                      style={{ width: `${pct[c.id]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Moon className="h-4 w-4" />
              Total de votos apurados:{" "}
              <strong className="text-foreground">{total}</strong>
            </p>
          </section>
        </div>
      </div>

      {pending && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-lavender/60 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
        >
          <div className="card-plush w-full max-w-sm p-7 text-center">
            <h2 id="confirm-title" className="font-display text-xl font-extrabold">
              Confirmar seu voto?
            </h2>
            <div className="mt-5 flex flex-col items-center gap-3 rounded-[26px] bg-pink/50 p-5">
              <div className={`sparkle-ring rounded-full ${pending.ringClass}`}>
                <img
                  src={pending.photo}
                  alt={`Foto do candidato ${pending.name}`}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <p className="font-display text-lg font-extrabold">{pending.name}</p>
              <p className="text-sm text-muted-foreground">Número {pending.number}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={confirm}
                className={`btn-plush inline-flex items-center justify-center gap-2 px-5 py-4 font-display text-base font-extrabold ${pending.buttonClass}`}
              >
                <Check className="h-5 w-5" />
                Confirmar Voto
              </button>
              <button
                onClick={() => setPending(null)}
                className="btn-plush inline-flex items-center justify-center gap-2 bg-muted px-5 py-3.5 text-sm font-bold text-foreground"
              >
                <Undo2 className="h-4 w-4" />
                Corrigir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
