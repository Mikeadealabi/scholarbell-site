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
  ["Parents say they didn't know", "You can see who has read each announcement and who has acted on it. You have the record."],
  ["Wrong audience", "Every message reaches the right families, and you know how many before you publish."],
  ["WhatsApp group chaos", "Official notices live in one secure place under the school's name, not on staff phones."],
  ["Slips never come back", "Permissions and forms are tracked, so you can see at a glance who has responded and who is outstanding."],
  ["Moved events", "The calendar remembers every change, so nobody is left on the old date."],
  ["One parent, many children", "One family account. Each update is clearly labelled for the child it concerns."],
  ["Same questions all day", "Circulars, forms and policies are easy for parents to find, and what needs attention comes first."],
  ["Uncontrolled access", "Staff see only what their role needs, and sensitive actions are recorded."],
];

export const TRUST: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Lock, title: "Your school's data is walled off.", text: "Each school's records are kept separate from every other school's, by design." },
  { icon: UserCheck, title: "Parents cannot sign themselves up.", text: "Parents join by invitation, and the school confirms every guardian." },
  { icon: KeyRound, title: "Staff get extra protection.", text: "Staff sign-in has a second step, and you decide who must use it." },
  { icon: Users, title: "Staff see only what their role allows.", text: "Nobody sees everything by accident." },
  { icon: ScrollText, title: "Everything sensitive leaves a trail.", text: "Important actions are recorded, so you can always answer \"who did what, and when\"." },
  { icon: ShieldCheck, title: "Uploaded files are checked.", text: "Documents are screened before they reach parents." },
  { icon: Sparkles, title: "AI is optional and under your control.", text: "It is off by default, and your staff always decide what is published." },
  { icon: ClipboardCheck, title: "Videos stay on YouTube or Vimeo.", text: "We do not host or copy them." },
];

export const STEPS: [string, string][] = [
  ["We create your school", " and your first administrator account."],
  ["Make it yours.", " Your school's name, colours and term dates."],
  ["Set up your structure and families.", " We guide you through bringing your classes and families across."],
  ["Invite parents.", " Each parent receives a personal invitation by email or WhatsApp."],
  ["Publish your first announcement.", ""],
];

export const FAQ: [string, string][] = [
  ["Do parents need to install anything?", "No. ScholarBell runs in the phone or computer browser."],
  ["Can parents sign themselves up?", "No, by design. The school confirms each guardian and invites them personally. This keeps strangers out."],
  ["I am a parent and I have no invitation. What do I do?", "Ask your child's school office to invite you. Only the school can confirm that you are a guardian."],
  ["What if some parents don't use email?", "Invitations can also be sent from your school's own WhatsApp. Day-to-day notifications currently go in the app and by email. SMS and WhatsApp notifications are not available yet."],
  ["How do we move our existing student and parent data?", "We guide your administrator through it, and nothing goes live until it has been checked."],
  ["Who owns our data? What if we leave?", "Your school's data belongs to your school. If you leave, you can request a full copy of it, and your data is then permanently deleted."],
  ["Can another school see our information?", "No. Each school's data is kept separate from every other school's."],
  ["Does the AI read our parents' private information?", "AI is off unless your administrator turns it on, and your staff always decide what is published. We will walk you through exactly how it works in the demo."],
  ["Can our school keep its own look?", "Yes. Your school's name and colours are set per school."],
  ["What does it cost?", "We quote per school, based on the number of students. Call or message us for a quote."],
  ["Who do we call if something goes wrong?", `Call or message us on WhatsApp: ${SITE.phone1.label} or ${SITE.phone2.label}.`],
];

export const NOT: string[] = [
  "A school management or student records system",
  "A learning platform for lessons and homework",
  "An accounting or fee-collection tool",
  "A social network. There are no public comments, no parent directory and no student directory.",
];
