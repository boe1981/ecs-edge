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
 * ECS EDGE III — One-page landing page
 * Images must be in: /public/faculty/...
 * Sponsor logos must be in: /public/sponsors/...
 * OG image must be in: /public/og-ecs-edge.jpg
 */

const REGISTRATION_URL = "https://forms.gle/CgG2u8Ss2u1FQi668";
const SPONSOR_CONTACT_EMAIL = "info@ecsedge.org";
const SPONSOR_PROSPECTUS_URL = "#"; // set to "/ECS-EDGE-III-Sponsor-Prospectus.pdf" when ready

// ---- Faculty data ----
const internationalFaculty = [
  {
    name: "Dr. Antonios Pitsis",
    title: "Head of Cardiac Surgery",
    org: "Interbalkan Medical Center",
    loc: "Thessaloniki, Greece",
    photo: "/faculty/pitsis.jpg",
  },
  {
    name: "Dr. Mario Castillo-Sang",
    title: "Surgical Director, Mitral Valve & Heart Failure Therapies",
    org: "St. Elizabeth Healthcare",
    loc: "Cincinnati, USA",
    photo: "/faculty/castillo-sang.jpg",
  },
  {
    name: "Dr. Muhammad Ibrahim Azmi",
    title: "Consultant Cardio-Thoracic Surgeon",
    org: "Damansara Specialist Hospital 2",
    loc: "Kuala Lumpur, Malaysia",
    photo: "/faculty/azmi.jpg",
  },
  {
    name: "Dr. Jae Suk Yoo",
    title: "Associate Professor",
    org: "Asan Medical Center",
    loc: "South Korea",
    photo: "/faculty/yoo.jpg",
  },
  {
    name: "Dr. Abdullah Kaya",
    title: "Consultant Cardiac Surgeon",
    org: "Jessa Hospital",
    loc: "Hasselt, Belgium",
    photo: "/faculty/kaya.jpg",
  },
  {
    name: "Dr. Evandro Lopes",
    title: "Consultant Cardiac Surgeon",
    org: "Campo Grande",
    loc: "Brazil",
    photo: "/faculty/Lopes.jpg", // case sensitive
  },
  {
    name: "Dr. Nguyen Cong Huu",
    title: "Cardiovascular Centre",
    org: "E Hospital",
    loc: "Vietnam",
    photo: "/faculty/huu.jpg",
  },
  {
    name: "Dr. Sheng",
    title: "Robotic Totally Endoscopic Mitral Valve Repair",
    org: "Virtual Faculty",
    loc: "China",
    photo: "/faculty/sheng.jpg",
  },
];

const nationalFaculty = [
  {
    name: "Dr. Kunal Sarkar",
    title: "Chief Cardiac Surgeon & Director",
    org: "Manipal Hospital, EM Bypass",
    loc: "Mukundapur, Kolkata",
    photo: "/faculty/sarkar.jpg",
  },
  {
    name: "Dr. Lalit Kapoor",
    title: "Senior Consultant Cardiac Surgeon",
    org: "NH Rabindranath Tagore International Institute of Cardiac Sciences",
    loc: "Kolkata",
    photo: "/faculty/kapoor.jpg",
  },
  {
    name: "Dr. Debasis Das",
    title: "Sr. Consultant Cardiac Surgeon",
    org: "Narayana Superspeciality Hospital",
    loc: "Howrah, Kolkata",
    photo: "/faculty/das_0.jpg",
  },
  {
    name: "Dr. Ramprassath M S",
    title: "Senior Consultant and Chief Endoscopic Cardiac Surgeon",
    loc: "Sri Ramakrishnon Hospital, Coimbatore",
    photo: "/faculty/Ram-prasath.jpg", // case sensitive
  },
  {
    name: "Dr. Sudarshan G T",
    title: "Senior Consultant & Additional Director",
    org: "Fortis Hospital",
    loc: "Bengaluru",
    photo: "/faculty/sudarshan.jpg",
  },
  {
    name: "Dr. Pradeep Narayan",
    title: "Senior Consultant Cardiac Surgeon",
    org: "RN Tagore Hospital",
    loc: "Kolkata",
    photo: "/faculty/narayan.jpg",
  },
   {
  name: "Dr. Amarnath Shaw",
  title: "Consultant Cardiac Surgeon",
  org: "Infinity Care Hospital",
  loc: "Varanasi",
  photo: "/faculty/amarnath.jpg",
},
{
  name: "Dr. Sumbul Siddiqui",
  title: "Consultant Cardiac Surgeon & HOD (CVTS)",
  org: "DBASI SMHRC",
  loc: "Nagpur, India",
  photo: "/faculty/sumbul.jpg",
},


];

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
  {
    name: "Dr. Evandro Lopes",
    role: "Guest Course Co-Director",
    org: "Consultant Cardiac Surgeon",
    loc: "Campo Grande, Brazil",
    photo: "/faculty/Lopes.jpg",
  },
];


const sponsors = [
  { logo: "/sponsors/meril.png" },
  { logo: "/sponsors/grena.png" },
  { logo: "/sponsors/usb-medical.png" },
  { logo: "/sponsors/edwards.png" },
];



function FacultyCard({
  name,
  title,
  org,
  loc,
  photo,
}: {
  name: string;
  title: string;
  org?: string;
  loc?: string;
  photo?: string;
}) {
  return (
    <Card className="rounded-3xl border-white/15 bg-white/5">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
           <img
  src={photo || "/faculty/placeholder.jpg"}
  alt={name}
  className="h-full w-full object-cover"
  loading="lazy"
/>

          </div>
        </div>

        <div className="text-lg font-semibold text-slate-200 transition-colors hover:text-cyan-200">
          {name}
        </div>
        <div className="mt-2 text-sm text-slate-100/90">{title}</div>
        {org ? <div className="mt-1 text-sm text-slate-200/90">{org}</div> : null}
        {loc ? <div className="mt-2 text-xs text-slate-300">{loc}</div> : null}
      </CardContent>
    </Card>
  );
}

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
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Sponsors</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">
            Our sponsors and academic partner support high-fidelity training and global faculty participation.
          </p>
        </div>
      </div>

      {/* Logos only */}
     <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
              Faculty
            </a>
            <a className="hover:text-white" href="#agenda">
              Program
            </a>
            <a className="hover:text-white" href="#register">
              Register
            </a>
            <a className="hover:text-white" href="#sponsors">
              Sponsors
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
                Hands-on Simulation
              </Badge>
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                Live Endoscopy Cases
              </Badge>
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                International Faculty
              </Badge>
              <Badge className="rounded-2xl bg-white/10 text-slate-100 hover:bg-white/10">
                Endorsed by IACTS & ATCVSWB
              </Badge>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              ECS EDGE III
              <span className="block text-slate-200">
                3rd Endoscopic Cardiac Surgery Workshop
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              A focused, high-yield training experience designed for surgeons and teams aiming to
              build—or elevate—a safe, reproducible Endoscopic Cardiac Surgery program.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-slate-300" />
                <span>
                  <span className="font-semibold">Dates:</span>{" "}
                  <span className="text-slate-200">24–25 January</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-slate-300" />
                <span>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="text-slate-200">
                    Kolkata • Manipal Hospitals, Mukundapur
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-slate-300" />
                <span>
                  <span className="font-semibold">Format:</span>{" "}
                  <span className="text-slate-200">
                    Live Cases • Talks • Live-in-Box • Dry Lab • Wet Lab Skill Stations
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
                <Video className="h-4 w-4" /> Surgical video demonstration
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
                    <div className="text-sm font-semibold text-white">Program at a glance</div>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      <li>• Day 1: Live Surgery + ECS Interactive Core + Live-in-Box ECS + Global Virtual Session</li>
                      <li>• Day 2: Interactive Discussion + Dry Lab + Wet Lab</li>
                      <li>• Focus: patient safety, reproducibility, and practical skill development</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-slate-950/50 p-4">
                    <div className="text-sm font-semibold text-white">Signature formats</div>
                    <ul className="mt-2 space-y-2 text-sm text-slate-200">
                      <li>• Live endoscopic & robotic surgeries</li>
                      <li>• Global virtual faculty (setup → precision)</li>
                      <li>• Live-in-a-box demos + video editing</li>
                      <li>• Hands-on wet lab: endoscopic MVR / AVR modules</li>
                    </ul>
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
              title: "Live cases + video breakdown",
              desc: "Endoscopic case strategy, exposure, pacing, and complication avoidance with stepwise deconstruction.",
              icon: <Video className="h-5 w-5" />,
            },
            {
              title: "High-fidelity simulation",
              desc: "Dry lab stations for hand-eye coordination, suturing, knotting, and access-site closure.",
              icon: <BadgeCheck className="h-5 w-5" />,
            },
            {
              title: "Wet lab skill stations",
              desc: "Dedicated stations for Totally Endoscopic Valve modules with coached repetitions.",
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

      {/* Faculty */}
      <section id="faculty" className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Faculty</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">
            Global leaders and national experts—covering live surgery, core sessions, live-in-a-box demonstrations, and hands-on wet lab coaching.
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2">
            <div className="text-sm font-semibold text-white">International Faculty</div>
            <span className="text-xs text-slate-300">(On-site + Virtual)</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {internationalFaculty.map((f) => (
              <FacultyCard key={f.name} {...f} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2">
            <div className="text-sm font-semibold text-white">National Faculty</div>
            <span className="text-xs text-slate-300">(India)</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {nationalFaculty.map((f) => (
              <FacultyCard key={f.name} {...f} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2">
            <div className="text-sm font-semibold text-white">Course Leadership</div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {courseLeadership.map((f) => (
              <LeadershipCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Agenda / Scientific Program */}
     {/* Scientific Program */}
<section
  id="agenda"
  className="mx-auto max-w-6xl px-4 py-12 md:py-14 [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]"
>
  <div>
    <h2 className="text-2xl font-semibold text-white md:text-3xl">Scientific Program</h2>
    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">
      Kolkata • 24–25 January — Live endoscopic and robotic surgeries, structured core teaching, global virtual sessions,
      live-in-a-box demonstrations, and hands-on dry lab and  wet lab training.
    </p>
  </div>

  <div className="mt-6 grid gap-6 md:grid-cols-2">
    {/* DAY 1 */}
    <div className="rounded-3xl border border-white/15 bg-white/5">
      <div className="p-6">
        <div className="text-xs font-semibold tracking-wide text-slate-200/90">DAY 1 • January 24</div>
        <div className="mt-1 text-base font-semibold text-white">
          Live Surgery • ECS Interactive Core • ECS Live-in-Box • Global ECS (Virtual)
        </div>

        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">08:30–09:00</div>
            <div>Registration & Welcome</div>
            <div className="mt-1 text-slate-300">
              Guest Lecture: <span className="text-slate-100">Will the Heart Still Need Hands?</span> — Kunal Sarkar
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">09:00–17:00 • LIVE SURGERY</div>
            <ul className="mt-2 space-y-1">
              <li>• Live Case 1: ECS MVR / ECS ASD — Ramprassath M S</li>
              <li>• Live Case 2: Robotic CABG — Sudarshan G T (Transmission from Bengaluru)</li>
              <li>• Live Case 3: ECS AVR (Bioprosthesis) — Antonios Pitsis (Transmission from Thessaloniki, Greece)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">09:00–11:00 • ECS INTERACTIVE CORE SESSION</div>
            <div className="mt-2">Why ECS • Case Selection • Preparation</div>
            <div>Anaesthesia (SLV, TEE, ERAS)</div>
            <div>Setup, Ports, Imaging • CPB in ECS</div>
            <div className="mt-2 text-slate-300">Sandip Sardar • Monalisa Datta</div>
          </div>

           <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">11:00–14:00 • Live-in-Box ECS</div>
            <ul className="mt-2 space-y-1">
              <li>• Endoscopic Mitral Valve Replacement</li>
              <li>• Endoscopic Aortic Valve Replacement</li>
              <li>• Endoscopic Tricuspid Valve Repair</li>
              <li>• Endoscopic BITA harvesting & Endo-CABG</li>
              <li>• Port Access ASD Closure (without utility port)</li>
              <li>• Video Recording & Editing</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">15:00–18:30 • GLOBAL ECS (VIRTUAL)</div>
            <ul className="mt-2 space-y-1">
              <li>• Setup → precision in 3D totally endoscopic surgery — Jae Suk Yoo (South Korea)</li>
              <li>• Endoscopic Double Valve Replacement — Muhammad Ibrahim Azmi (Malaysia)</li>
<li>• Endoscopic Mitral Valve Replacement After MitraClip Failure: Technique & Outcomes — Evandro Lopes (Brazil)
</li>
<li>• From Endoscopic BITA to Mini-access CABG: Composite Grafts and Extensions to Maximize Both Mammaries — Evandro Lopes (Brazil)
</li>
              <li>• Robotic Totally Endoscopic Mitral Valve Repair — Sheng (China)</li>
              <li>• Building an ECS program — Mario Castillo-Sang (USA)</li>
              <li>• Technique of Endo-CABG — Abdullah Kaya (Belgium)</li>
              <li>• Totally endoscopic cardiac surgery via trocars without robotic assistance — Nguyen Cong Huu (Vietnam)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* DAY 2 */}
    <div className="rounded-3xl border border-white/15 bg-white/5">
      <div className="p-6">
        <div className="text-xs font-semibold tracking-wide text-slate-200/90">DAY 2 • January 25</div>
        <div className="mt-1 text-base font-semibold text-white">
          Dry Lab • Interactive Discussion • Wet Lab
        </div>

<div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">09:00–11:00 • ECS Dry Lab</div>
            <div className="mt-2">Hand-eye coordination, Suturing, Knotting, COR-KNOT and Access-site closure</div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">11:00–12:00 • Interactive Discussion</div>
            <div className="mt-2">
              Anaesthesia: One-lung ventilation • regional blocks • ERAS • troubleshooting
            </div>
            <div className="mt-1">
              Perfusion: specialized circuit • modified cardioplegia • ECS protocols • troubleshooting
            </div>
          </div>

           <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-4">
            <div className="font-semibold text-white">11:00–14:00 • ECS Wet Lab</div>
            <div className="mt-2">Endoscopic MVR / Endoscopic AVR modules</div>
            <div className="mt-2 text-slate-300">Closing remarks • feedback • certificates</div>
          </div>
        </div>
      </div>
    </div>
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
                  Limited hands-on slots to ensure meaningful coaching. Register early to confirm participation.
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
                Manipal Hospitals, Mukundapur
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
