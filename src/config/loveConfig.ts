// Personal settings for the Valentine's invite.
// Relationship start is recorded in Kenya time (East Africa Time, UTC+3).
export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  yourName: "Ezekiel",
  partnerName: "Preciously",
  relationshipStart: "2026-08-16T00:00:00+03:00",
  valentineDate: "2027-02-14",
  heroHeadline: "To My Dearest Preciously",
  heroSubtext: "A little space made to celebrate you, our memories, and the moments still ahead.",
  photoCount: 0,
  milestones: [] as Milestone[],
  yourEmail: "",
  emailSubject: "My Valentine's Answer",
  emailBody: "Yes! I'd love to be your Valentine!\\n\\nLove,\\n",
  inviteTitle: "Preciously, Will You Be My Valentine?",
  inviteMessage: "I'd love to make another beautiful memory with you.",
  inviteDate: "February 14, 2027",
  inviteTime: "To be decided",
  inviteLocation: "A surprise awaits...",
};

export default loveConfig;
