"use client";

import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Video,
  HeartPulse,
  Stethoscope,
  BadgeCheck,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

/**
 * ECS EDGE IV — One-page landing page
 * Images must be in: /public/faculty/...
 * Sponsor logos must be in: /public/sponsors/...
 * OG image must be in: /public/og-ecs-edge.jpg
 */

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScOy709X24VB1lmrTJdRvZzEwyDlCTHs4SxnTaftMREH_9e-g/viewform";
const SPONSOR_CONTACT_EMAIL = "info@ecsedge.org";

const courseLeadership = [
  {
    name: "Dr. Sandip Sardar",
    role: "Course Director",
    org: "Senior Consultant Cardiac Surgeon",
    loc: "Manipal Hospitals, Mukundapur, Kolkata",
    photo: "/faculty/sardar.jpg",
  },
  {
    name: "Dr. Monalisa Datta",
    role: "Course Co-Director",
    org: "Senior Consultant Cardiac Anaesthesiologist",
    loc: "Manipal Hospitals, Mukundapur, Kolkata",
    photo: "/faculty/datta.jpg",
  },
];

const sponsors = [{ logo: "/sponsors/meril.png" }];

// ---- Agenda (Saturday, 12 December 2026) ----
type AgendaItem = { time: string; items: string[]; isBreak?: boolean };

const agenda: { num: string; title: string; slots: AgendaItem[] }[] = [
  {
    num: "01",
    title: "Core Concepts",
    slots: [
      { time: "08:00–08:30", items: ["Breakfast"], isBreak: true },
      {
        time: "08:30–10:30",
        items: [
          "Why ECS",
          "Case Selection for ECS",
          "Pre-operative Preparation for ECS",
          "Anaesthesia for ECS — SLV, TEE, ERAS",
        ],
      },
      { time: "10:30–11:00", items: ["Tea Break"], isBreak: true },
    ],
  },
  {
    num: "02",
    title: "Live-in-a-Box Video Session",
    slots: [
      {
        time: "11:00–13:00",
        items: ["TEMVR", "TEAVR", "TECAB", "Gap Analysis", "Video Recording and Editing"],
      },
      { time: "13:00–13:45", items: ["Lunch"], isBreak: true },
    ],
  },
  {
    num: "03",
    title: "Wet Lab — Mitral Valve Replacement",
    slots: [
      { time: "14:00–14:30", items: ["Wet-lab demonstration by Dr. Sandip Sardar"] },
      { time: "14:30–16:00", items: ["Batch One — Hands-on"] },
      { time: "16:30–18:00", items: ["Batch Two — Hands-on"] },
      { time: "18:00–18:30", items: ["Conclusion and Feedback"] },
      { time: "19:00–20:30", items: ["Dinner"], isBreak: true },
    ],
  },
];

function LeadershipCard({
  name,
  role,
  org,
  loc,
  photo,
  highlight,
}: {
  name: string;
  role: string;
  org: string;
  loc: string;
  photo: string;
  highlight?: boolean;
}) {
  return (
    <Card className="rounded-3xl border-white/15 bg-gradient-to-br from-white/10 to-white/5">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div
            className={[
              "relative h-16 w-16 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20",
              highlight
                ? "ring-amber-300/60 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
                : "",
            ].join(" ")}
          >
            <img
              src={photo || "/faculty/placeholder.jpg"}
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="min-w-0">
            <div className="text-xs text-slate-300">{role}</div>

            <div className="mt-1 text-xl font-semibold text-slate-200 relative inline-block">
  <span className="after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-slate-400/50 after:rounded-full">
    {name}
  </span>
</div>


            <div className="mt-2 text-sm text-slate-200/90">{org}</div>
            <div className="mt-1 text-sm text-slate-300">{loc}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SponsorSection() {
  return (
    <section id="sponsors" className="mx-auto max-w-6xl px-4 py-12 md:py-14">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">In Association With</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">
            ECS EDGE IV is held in association with Meril Cardiac Surgery.
          </p>
        </div>
      </div>

      {/* Logos only */}
     <div className="mt-6 grid max-w-xs grid-cols-1 gap-4">
  {sponsors.map((s, idx) => (
    <div
      key={s.logo}
      className="rounded-3xl border border-white/15 bg-white/5 p-5 shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5"
    >
      <div className="relative mx-auto h-16 w-full sm:h-20 md:h-24">
        <Image
          src={s.logo}
          alt="Sponsor logo"
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 240px"
          className="object-contain"
          priority={idx < 2}
        />
      </div>
    </div>
  ))}
</div>


      {/* optional contact line */}
      <div className="mt-6 text-sm text-slate-300">
        Sponsorship queries:{" "}
        <a className="text-slate-200 underline hover:text-white" href={`mailto:${SPONSOR_CONTACT_EMAIL}`}>
          {SPONSOR_CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Image
                src="/logo.png"
                alt="ECS EDGE Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">ECS EDGE</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a className="hover:text-white" href="#highlights">
              Highlights
            </a>
            <a className="hover:text-white" href="#faculty">
              Directors
            </a>
            <a className="hover:text-white" href="#agenda">
              Program
            </a>
            <a className="hover:text-white" href="#register">
              Register
            </a>
            <a className="hover:text-white" href="#sponsors">
              Partner
            </a>
          </nav>

          <Button className="rounded-2xl" asChild>
            <a href={REGISTRATION_URL} target="_blank" rel="noreferrer">
              Register <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                4th Edition
              </Badge>
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                Hands-on Workshop
              </Badge>
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                Wet Lab — Mitral Valve Replacement
              </Badge>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              ECS EDGE IV
              <span className="block text-slate-200">
                Endoscopic Cardiac Surgery Workshop
              </span>
            </h1>

            <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">
              In association with Meril Cardiac Surgery
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              A focused, one-day hands-on training experience designed for surgeons and teams aiming to
              build—or elevate—a safe, reproducible Endoscopic Cardiac Surgery program.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 shrink-0 text-slate-300" />
                <span>
                  <span className="font-semibold">Date:</span>{" "}
                  <span className="text-slate-200">Saturday, 12 December 2026 • 08:00–20:30</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                <span>
                  <span className="font-semibold">Venue:</span>{" "}
                  <span className="text-slate-200">
                    Meril Kolkata Academy, 6th Floor, Unit 6A, Arch Waterfront, Ring Road, GP Block,
                    Sector V, Bidhan Nagar, Kolkata
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 shrink-0 text-slate-300" />
                <span>
                  <span className="font-semibold">Format:</span>{" "}
                  <span className="text-slate-200">
                    Core Concepts • Live-in-a-Box Video Session • Wet Lab
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href={REGISTRATION_URL} target="_blank" rel="noreferrer">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/15"
                asChild
              >
                <a href="#agenda">View Program</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" /> Certificate of participation
              </span>
              <span className="inline-flex items-center gap-2">
                <Stethoscope className="h-4 w-4" /> Team-based learning
              </span>
              <span className="inline-flex items-center gap-2">
                <Video className="h-4 w-4" /> Live-in-a-box video session
              </span>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <Card className="rounded-3xl border-white/15 bg-white/5 shadow-xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-300">Course Director</div>
                   <div className="mt-1 text-xl font-semibold text-slate-200">
  Dr. Sandip Sardar
</div>

                    <div className="mt-1 text-sm text-slate-200">
                      Senior Consultant Cardiac Surgeon
                    </div>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/15 bg-slate-950/50 p-4">
                    <div className="text-sm font-semibold text-white">Programme at a glance</div>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      <li>• Morning: Core Concepts — why ECS, case selection, preparation, anaesthesia</li>
                      <li>• Midday: Live-in-a-Box — TEMVR, TEAVR, TECAB, gap analysis, video editing</li>
                      <li>• Afternoon: Wet Lab — mitral valve replacement, two hands-on batches</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-slate-950/50 p-4">
                    <div className="text-sm font-semibold text-white">Co-Director</div>
                    <div className="mt-1 text-base font-semibold text-slate-200">Dr. Monalisa Datta</div>
                    <div className="mt-1 text-sm text-slate-200">
                      Senior Consultant Cardiac Anaesthesiologist
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Workshop Highlights
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
            A practical curriculum built around safe steps, reproducible setup, and real-world troubleshooting.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Core concepts",
              desc: "Why ECS, case selection, pre-operative preparation, and anaesthesia for ECS — SLV, TEE, ERAS.",
              icon: <HeartPulse className="h-5 w-5" />,
            },
            {
              title: "Live-in-a-box video session",
              desc: "TEMVR, TEAVR and TECAB deconstructed on video, with gap analysis and video recording & editing.",
              icon: <Video className="h-5 w-5" />,
            },
            {
              title: "Wet lab — mitral valve replacement",
              desc: "Demonstration by the Course Director, followed by two coached hands-on batches.",
              icon: <Stethoscope className="h-5 w-5" />,
            },
          ].map((it) => (
            <Card key={it.title} className="rounded-3xl border-white/15 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                    {it.icon}
                  </div>
                  <div className="text-base font-semibold text-white">{it.title}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Course Leadership */}
      <section id="faculty" className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Course Leadership</h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {courseLeadership.map((f) => (
            <LeadershipCard key={f.name} {...f} />
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section
        id="agenda"
        className="mx-auto max-w-6xl px-4 py-12 md:py-14 [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]"
      >
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Agenda</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">
            Saturday, 12 December 2026 • Meril Kolkata Academy, Kolkata
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {agenda.map((block) => (
            <div key={block.num} className="rounded-3xl border border-white/15 bg-white/5">
              <div className="p-6">
                <div className="flex items-baseline gap-3 border-b border-white/15 pb-3">
                  <span className="text-xs font-semibold tracking-wide text-slate-300">{block.num}</span>
                  <span className="text-base font-semibold text-white">{block.title}</span>
                </div>

                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-200">
                  {block.slots.map((slot) => (
                    <div
                      key={slot.time}
                      className={[
                        "rounded-2xl border p-4",
                        slot.isBreak
                          ? "border-white/10 bg-transparent"
                          : "border-white/15 bg-slate-900/50",
                      ].join(" ")}
                    >
                      <div className="font-semibold text-white">{slot.time}</div>
                      {slot.items.length === 1 ? (
                        <div className={slot.isBreak ? "italic text-slate-300" : ""}>
                          {slot.items[0]}
                        </div>
                      ) : (
                        <ul className="mt-1 space-y-1">
                          {slot.items.map((it) => (
                            <li key={it}>• {it}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Register */}
      <section id="register" className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:pb-24">
        <Card className="rounded-3xl border-white/15 bg-gradient-to-br from-white/10 to-white/5 shadow-xl">
          <CardContent className="p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-white md:text-3xl">Secure your seat</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
                  Seats are limited. Register online in under a minute.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
                  <Badge className="rounded-2xl bg-slate-950/50 text-slate-100 hover:bg-slate-950/50">
                    Limited seats
                  </Badge>
                  <Badge className="rounded-2xl bg-slate-950/50 text-slate-100 hover:bg-slate-950/50">
                    Team registrations welcome
                  </Badge>
                  <Badge className="rounded-2xl bg-slate-950/50 text-slate-100 hover:bg-slate-950/50">
                    Certificate provided
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button size="lg" className="rounded-2xl" asChild>
                  <a href={REGISTRATION_URL} target="_blank" rel="noreferrer">
                    Register via Google Form <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-2xl bg-slate-950/50 text-slate-100 hover:bg-slate-950/60"
                  asChild
                >
                  <a href="#contact">Contact the Team</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sponsors at bottom */}
      <SponsorSection />

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Organised by</div>
              <div className="mt-2 text-base text-slate-200">ECS EDGE • Hiyaa Heart Foundation</div>
              <div className="mt-1 text-sm text-slate-300">Kolkata, India</div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <div className="mt-3 space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-300" />
                  <span>+91-9831054978</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-300" />
                  <a className="hover:text-white" href="mailto:drsandipsardar@gmail.com">
                    drsandipsardar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Venue</div>
              <div className="mt-3 text-sm text-slate-200">
                Meril Kolkata Academy
                <br />
                6th Floor, Unit 6A, Arch Waterfront, Ring Road,
                <br />
                GP Block, Sector V, Bidhan Nagar
                <br />
                Kolkata, West Bengal
              </div>
              <div className="mt-3 text-xs text-slate-400">© {new Date().getFullYear()} ECS EDGE</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
