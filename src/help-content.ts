import { Building2, KeyRound, type LucideIcon } from "lucide-react";

/** The help centre's content, grown one category at a time. Keep every fact here true to what
 *  the product actually does — these are support articles, not marketing copy. */

export type HelpCategory = { slug: string; title: string; description: string; icon: LucideIcon };

export type HelpArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  steps: string[];
  note?: string;
  related?: string[];
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: "signing-in",
    title: "Signing in and invitations",
    description: "For the moment before you're even in: passwords, invitations, and the extra security step some schools require.",
    icon: KeyRound,
  },
  {
    slug: "for-schools",
    title: "Importing, invitations and admin access",
    description: "For the administrator's seat: setting up students and families from a spreadsheet, getting invitations delivered, and managing staff access safely.",
    icon: Building2,
  },
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "cant-log-in",
    category: "signing-in",
    title: "I can't log in to my account",
    summary: "Start here if sign-in isn't working and you're not sure why.",
    steps: [
      "Make sure you're on the right site. Parents and staff sign in at scholarbell.app — not scholarbell.com, which is just where you're reading this.",
      "Check your email and password are typed exactly as your school has them on file, with no extra spaces before or after.",
      "If you're not sure of your password, use \"Forgot your password?\" on the sign-in page instead of guessing — repeated wrong attempts won't fix it.",
      "If you've never signed in before, you need a personal invitation from your school first. You cannot create an account yourself.",
    ],
    note: "Still stuck after trying these? Contact us and we'll help you sort it out directly.",
    related: ["forgot-password", "didnt-receive-invitation"],
  },
  {
    slug: "forgot-password",
    category: "signing-in",
    title: "I forgot my password",
    summary: "How to reset it yourself, without calling anyone.",
    steps: [
      "On the sign-in page at scholarbell.app, tap \"Forgot your password?\"",
      "Enter the email address your school has on file for you, and submit.",
      "Check your email for a reset link. It can take a few minutes to arrive — check your spam or junk folder too.",
      "Open the link and choose a new password. The link works once, so if you've already used it or waited too long, request a new one rather than reusing the old email.",
    ],
    note: "If the email never arrives, confirm with your school that they have the right email address for you, then contact us.",
    related: ["cant-log-in", "invitation-link-expired"],
  },
  {
    slug: "signed-out",
    category: "signing-in",
    title: "Why do I keep getting signed out?",
    summary: "Explains the message \"You were signed out because there was no activity.\"",
    steps: [
      "ScholarBell signs you out automatically after a few minutes with no activity. This protects your school's information if you leave a shared or public computer unattended.",
      "It's not an error — just sign in again with your usual email and password.",
      "If it happens unusually often, it may mean the page has been open and idle in a background tab for a while. Opening scholarbell.app fresh and signing in again resolves it.",
    ],
    related: ["cant-log-in"],
  },
  {
    slug: "didnt-receive-invitation",
    category: "signing-in",
    title: "I didn't receive my invitation email",
    summary: "Parents and staff don't sign up themselves — here's what to check.",
    steps: [
      "By design, nobody can sign themselves up for ScholarBell. Your school sends every parent and staff member a personal invitation, so strangers can't claim to be a guardian.",
      "Check your spam or junk folder first — this is the most common cause.",
      "Confirm your school has your correct email address on file. Some schools invite parents over WhatsApp instead of email, so ask which method they used for you.",
      "Ask your school's front office to resend your invitation. Only the school can do this — we can't issue invitations directly.",
    ],
    related: ["invitation-link-expired", "why-need-invite"],
  },
  {
    slug: "invitation-link-expired",
    category: "signing-in",
    title: "My invitation link says it's expired or invalid",
    summary: "What \"this link has expired\" means, and the only fix for it.",
    steps: [
      "Invitation and password-reset links are single-use and time-limited on purpose, so an old email or a forwarded link stops working on its own.",
      "\"This link has expired\" means one of two things: it's already been used to set a password, or it's older than the window allowed for it.",
      "There's no way to extend or reactivate an old link. Ask your school to send you a new invitation (parents) or ask your administrator to resend it (staff).",
      "Once you receive the new link, use it promptly rather than letting it sit unopened.",
    ],
    related: ["didnt-receive-invitation", "forgot-password"],
  },
  {
    slug: "authenticator-code",
    category: "signing-in",
    title: "What's the 6-digit code it's asking for?",
    summary: "For staff accounts with the extra sign-in step turned on.",
    steps: [
      "Some schools require staff to confirm sign-in with a second step, using an authenticator app on their phone, in addition to their password. Parents never see this step — it only applies to staff accounts, and only where the school's administrator has turned it on.",
      "After entering your email and password, open your authenticator app and type in the current 6-digit code it shows for ScholarBell.",
      "Codes refresh every 30 seconds. If one fails, wait for the next one rather than retrying the same code.",
      "Lost or changed your phone? Use one of the backup codes you were given when this was set up, then ask your administrator to help you set it up again on your new device.",
    ],
    related: ["cant-log-in", "staff-lost-phone-mfa"],
  },
  {
    slug: "why-need-invite",
    category: "signing-in",
    title: "Why do I need my school to invite me instead of signing up myself?",
    summary: "The reasoning behind ScholarBell having no public sign-up.",
    steps: [
      "ScholarBell has no public sign-up page on purpose. If anyone could create an account and claim to be a parent, schools couldn't trust who was actually reading each child's information.",
      "Your school confirms every guardian before inviting them, so only people the school has verified ever see a family's updates.",
      "Each parent account is also scoped to their own children only — not a school-wide directory — which is part of the same design.",
      "If you believe you should have access and haven't been invited yet, the fastest route is asking your school's office directly, not us — only they can confirm who your children's guardians are.",
    ],
    related: ["didnt-receive-invitation"],
  },
  {
    slug: "import-rows-skipped",
    category: "for-schools",
    title: "Why did some rows in my import fail?",
    summary: "Reading the \"Check file\" results before you commit an import.",
    steps: [
      "Importing always runs in two steps: \"Check file\" reads every row and shows you what would happen, without saving anything; \"Import\" only then writes exactly what the check showed you.",
      "A row with a problem is skipped whole — it never half-imports a student. Every other good row in the file still goes through.",
      "The most common cause is a class name that doesn't match your school's structure exactly. If it's close, the check tells you which existing class it might be.",
      "Other common causes: a missing student first or last name, a duplicate admission number already used earlier in the same file, or a guardian row with no valid email address.",
      "A row with no guardian at all isn't an error, just a warning — the student is still created, but nobody will see that child's updates until a guardian is linked.",
    ],
    note: "Fix the rows the check flagged in your spreadsheet, then upload it again — you don't need to remove the rows that already passed.",
    related: ["import-same-file-twice", "parents-no-invitation-after-import"],
  },
  {
    slug: "import-same-file-twice",
    category: "for-schools",
    title: "Is it safe to run the same import file twice?",
    summary: "Yes — here's why re-importing doesn't duplicate anything.",
    steps: [
      "The importer recognises students and parents it already knows, by admission number or by name and class, and by email for parents. Running the same file again changes nothing for rows it already imported.",
      "A student is never moved to another class by re-importing. If the spreadsheet now shows a different class for an existing student, that row is left alone rather than moving them.",
      "A guardian link your school had deliberately revoked is never silently restored by an import — that choice is protected.",
      "This means it's safe to add new students and families to the same spreadsheet over time and re-upload the whole file, rather than keeping track of exactly what's new.",
    ],
    related: ["import-rows-skipped"],
  },
  {
    slug: "parents-no-invitation-after-import",
    category: "for-schools",
    title: "Parents didn't get their invitation after I imported them",
    summary: "How invitation delivery works after a bulk import, and what to check.",
    steps: [
      "After an import, each new parent gets an invitation link that works once and expires after 7 days.",
      "If your school has email sending turned on, invitations are emailed automatically — ask the parent to check spam first.",
      "If email isn't set up, or a parent has no email address on file, the import screen gives you a WhatsApp link for that parent instead, which you can send yourself.",
      "An invitation that was never opened within 7 days simply expires. There's no need to track it down — resending issues a fresh one.",
    ],
    related: ["resend-invitation", "import-rows-skipped"],
  },
  {
    slug: "resend-invitation",
    category: "for-schools",
    title: "How do I resend an invitation?",
    summary: "For a parent or staff member whose link expired or never arrived.",
    steps: [
      "Find the person in Staff & roles (for staff) or your parents list, and use the resend-invitation action there.",
      "Resending issues a brand new link and invalidates the old one — the old link won't come back to life, so there's no harm in resending more than once.",
      "If a parent's email address was wrong, correct it first; while their account is still waiting on its first sign-in, correcting the email automatically sends a fresh invitation to the new address.",
      "Once an account has been activated, its email can no longer be changed this way — at that point, it's a sign-in question, not an invitation question.",
    ],
    related: ["parents-no-invitation-after-import"],
  },
  {
    slug: "last-administrator",
    category: "for-schools",
    title: "We can't remove our last administrator",
    summary: "Why ScholarBell blocks this, and how to actually make the change.",
    steps: [
      "ScholarBell will not let a school end up with zero active administrators — removing the administrator role, or disabling the account, is blocked if it would be the last one.",
      "This is deliberate: without it, a school could accidentally lock itself out of its own admin tools with no way back in except contacting us.",
      "To replace your administrator, grant the administrator role to the new person first, then remove it from the old one. Order matters — the system allows the first step and would only block the second if it left nobody.",
      "Nobody can disable their own account either, administrator or not — ask a colleague with staff-management access to do it.",
    ],
    related: ["staff-roles-scope"],
  },
  {
    slug: "staff-lost-phone-mfa",
    category: "for-schools",
    title: "A staff member lost their phone and is stuck at the 6-digit code",
    summary: "How an administrator clears someone's two-factor setup.",
    steps: [
      "If they still have their backup codes, that's the fastest fix — no admin needed. See \"What's the 6-digit code it's asking for?\" in Signing in and invitations.",
      "Without backup codes, go to Staff & roles and use \"Lost phone? Reset someone's two-factor.\"",
      "This clears their two-factor setup and signs them out of every device immediately, so do it only once you've confirmed the request is genuinely from them.",
      "They sign in again with just their password, then set up their authenticator app again from scratch.",
      "This action is recorded in your school's audit log, like every sensitive staff action.",
    ],
    related: ["authenticator-code", "account-locked"],
  },
  {
    slug: "account-locked",
    category: "for-schools",
    title: "An account got locked after too many attempts",
    summary: "What triggers it, how long it lasts, and what to tell the person.",
    steps: [
      "After 5 incorrect password or authenticator-code attempts in a row, ScholarBell locks that account's sign-in for 15 minutes. This protects it against someone guessing their way in.",
      "There's nothing an administrator needs to do — it clears itself after 15 minutes. Trying again sooner, or resetting the password, won't shorten the wait.",
      "If it keeps happening to the same person, it usually means they're confidently using a wrong password rather than genuinely forgetting it — point them to \"Forgot your password?\" instead of retrying.",
      "A suspended school doesn't count towards this at all — if sign-in is blocked for everyone at once, that's a different issue; contact us.",
    ],
    related: ["staff-lost-phone-mfa", "cant-log-in"],
  },
  {
    slug: "staff-roles-scope",
    category: "for-schools",
    title: "What can each staff role see and do?",
    summary: "Roles in ScholarBell are always limited to a part of the school, never everything by default.",
    steps: [
      "Every staff role is granted over a specific scope: the whole school, one division (for example, Primary), one level, or one class. A role isn't just a job title — it's that job title plus the part of the school it covers.",
      "A class teacher's role is normally scoped to their own class, so they can only message or manage that class's families, not the whole school.",
      "A \"Head of division\" role, such as Head of Primary, is the same underlying role granted at the division level instead of a single class, so it covers every class inside that division.",
      "When you create a staff account, you choose both the role and its scope. To widen or narrow someone's responsibility later, change the scope on their existing role rather than creating a second account for them.",
      "Every grant and removal of a role is recorded in the audit log, so you can always answer who had access to which part of the school, and when.",
    ],
    related: ["last-administrator"],
  },
];

export function articleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}

export function articlesInCategory(categorySlug: string): HelpArticle[] {
  return HELP_ARTICLES.filter((a) => a.category === categorySlug);
}
