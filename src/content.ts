import {
  BellRing, CalendarClock, ClipboardCheck, EyeOff, FileSearch, FileWarning, KeyRound, Lock, MessageCircle,
  ScrollText, ShieldCheck, Sparkles, UserCheck, Users, UsersRound, type LucideIcon,
} from "lucide-react";

/** One place for every fact the site states. Change a number or a link here and it changes everywhere. */
export const SITE = {
  name: "ScholarBell",
  tagline: "Keeping parents in the loop on their scholars.",
  url: "https://scholarbell.com",
  appUrl: "https://scholarbell.app",
  signInUrl: "https://scholarbell.app/login",
  phone1: { tel: "+2348065851822", label: "+234 806 585 1822" },
  phone2: { tel: "+2348029943781", label: "+234 802 994 3781" },
  whatsapp: `https://wa.me/2348065851822?text=${encodeURIComponent(
    "Hello ScholarBell, we would like a 30-minute walkthrough.\nSchool name:\nMy name and role:\nNumber of students:\nBest time to call:",
  )}`,
} as const;

export const NAV = [
  { href: "/features/", label: "Features" },
  { href: "/security/", label: "Security" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

export const PROBLEMS: { quote: string; truth: string; icon: LucideIcon }[] = [
  { icon: BellRing, quote: "We announced it three times and parents still say they didn't know.", truth: "Messages go out to everyone and are read by no one, and nobody can prove who saw what. When a dispute arises, you have no record." },
  { icon: Users, quote: "A trip notice went to the whole school, not just Primary 4.", truth: "You cannot easily target by class or division, so parents receive noise, stop paying attention, and miss the message that mattered to them." },
  { icon: MessageCircle, quote: "Our official notices live in a teacher's WhatsApp group.", truth: "Personal phone numbers are exposed, there is no audit trail, messages vanish when a teacher leaves, and anything said there can be forwarded anywhere." },
  { icon: FileWarning, quote: "Permission slips come back late, on paper, or never.", truth: "You cannot see who has responded, so staff chase parents one by one. Missing consent becomes a safeguarding and liability risk on trip day." },
  { icon: CalendarClock, quote: "We moved the event, and half the parents came on the old date.", truth: "Changes overwrite the original. Nobody can show what the date was, what changed, who changed it, or why." },
  { icon: UsersRound, quote: "One parent has three children in three divisions and complains about the noise.", truth: "Parents are treated as a single list instead of as families. A parent with children in KG, Primary and JSS should see each child's news clearly labelled, in one place." },
  { icon: FileSearch, quote: "My front office answers the same question thirty times a day.", truth: "The information exists, in circulars, PDFs and chats, but parents cannot find it, so they call." },
  { icon: EyeOff, quote: "A former staff member still has parent contacts on their phone.", truth: "There are no scoped roles and no audit log. You cannot say who can see what, or who looked at what and when." },
];

export const COSTS: [string, string][] = [
  ["Staff time.", "Hours every week spent re-sending, chasing replies and answering repeat questions."],
  ["Parent trust.", "A parent who learns about a change late stops believing the school is organised."],
  ["Fee and reputation pressure.", "Disorganisation is visible. Parents compare schools, and they talk."],
  ["Risk.", "Missing permission records, no proof of notice, and personal phone numbers scattered across personal devices."],
  ["Leadership attention.", "Principals end up managing messages instead of teaching and learning."],
];

export const SOLUTIONS: [string, string][] = [
  ["Parents say they didn't know", "Every announcement tracks who has read it and who has acknowledged it. You see the numbers, and you have the record."],
  ["Wrong audience", "You choose the audience from a tree: whole school, a division, a class, or one child's family. Before you publish, you see a live count, for example \"36 parents will receive this\", with a breakdown."],
  ["WhatsApp group chaos", "Official notices live in one secure place under the school's name. Staff phone numbers stay private, and nothing disappears when a teacher leaves."],
  ["Slips never come back", "Actions come in five types: acknowledge, permission, survey, form and document upload. You see who has completed, who is outstanding and who is overdue, in one view."],
  ["Moved events", "The calendar keeps the original date, who changed it and why. Parents can RSVP."],
  ["One parent, many children", "Brothers and sisters share one parent account. Each update is labelled School-wide, Primary, Primary 4A or For David, so the parent knows at a glance what applies to which child."],
  ["Same questions all day", "A document centre and secure search put circulars, forms and policies where parents can find them. The parent home page shows what needs attention first."],
  ["Uncontrolled access", "Roles are scoped: a class teacher sees only their class, a head of division sees their division. Every sensitive action is written to an audit log."],
];

export const TRUST: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Lock, title: "Your school's data is walled off.", text: "Each school's records are separated in the database itself, not just hidden on screen. Another school cannot see yours, even if a mistake is made elsewhere in the software." },
  { icon: UserCheck, title: "Parents cannot sign themselves up.", text: "The school confirms every guardian relationship, and each parent receives a single-use invitation link." },
  { icon: KeyRound, title: "Staff get a second lock.", text: "Staff can sign in with a password plus a 6-digit code from an authenticator app. You decide who must use it. New schools start with administrators required." },
  { icon: Users, title: "Staff see only what their role allows.", text: "A class teacher sees their class. A head of division sees their division. Nobody sees everything by accident." },
  { icon: ScrollText, title: "Everything sensitive leaves a trail.", text: "An audit log records who did what and when." },
  { icon: ShieldCheck, title: "Uploaded files are checked.", text: "Documents are screened before they reach parents." },
  { icon: Sparkles, title: "AI is optional and visible.", text: "It is off by default. Your administrator sees exactly what is sent to the AI service before turning it on. It never publishes anything by itself, and AI-written text is labelled." },
  { icon: ClipboardCheck, title: "Videos stay on YouTube or Vimeo.", text: "We do not host or copy them." },
];

export const STEPS: [string, string][] = [
  ["We create your school", " and your first administrator account."],
  ["Add your identity.", " Your name, colours, logo, term dates and a welcome message."],
  ["Set up your structure.", " Divisions, levels and classes, the way your school actually works."],
  ["Import your families.", " Download our spreadsheet template and fill in one row per student with up to two guardians. Click \"Check file\" first: nothing is saved, and every problem is listed by line so you can fix it. Then import."],
  ["Invite parents.", " Each parent gets a single-use link by email, or you can send it from your own WhatsApp with a ready-written message in one tap. Phone numbers in common Nigerian formats are understood automatically."],
  ["Publish your first announcement.", ""],
];

export const FAQ: [string, string][] = [
  ["Do parents need to install anything?", "No. ScholarBell runs in the phone or computer browser."],
  ["Can parents sign themselves up?", "No, by design. The school confirms each guardian, and each parent gets a single-use invitation link. This keeps strangers out."],
  ["I am a parent and I have no invitation. What do I do?", "Ask your child's school office to invite you. Only the school can confirm that you are a guardian."],
  ["What if some parents don't use email?", "You can send each invitation from your own WhatsApp with a ready-written message. Day-to-day notifications currently go in the app and by email. SMS and WhatsApp notifications are not available yet."],
  ["How do we move our existing student and parent data?", "Fill in our spreadsheet template and run \"Check file\". Nothing is saved until every problem is fixed, and each problem is listed by line."],
  ["Who owns our data? What if we leave?", "Your school's data belongs to your school. If you leave, your administrator can request a full download of it, protected by a password and a two-factor code. The school is then locked for 30 days, after which all of its data is permanently deleted, and you receive a certificate confirming the deletion. The certificate contains no personal data."],
  ["Can another school see our information?", "No. Each school's data is separated in the database itself."],
  ["Does the AI read our parents' private information?", "AI is off unless your administrator turns it on. The settings page says exactly what is sent. It only suggests wording, and your staff always publish."],
  ["Can our school keep its own look?", "Yes. Name, colours and logo letters are set per school."],
  ["What does it cost?", "We quote per school, based on the number of students. Call or message us for a quote."],
  ["Who do we call if something goes wrong?", `Call or message us on WhatsApp: ${SITE.phone1.label} or ${SITE.phone2.label}.`],
];

export const NOT: string[] = [
  "A school management or student records system",
  "A learning platform for lessons and homework",
  "An accounting or fee-collection tool",
  "A social network. There are no public comments, no parent directory and no student directory.",
];
