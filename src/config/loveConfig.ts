// Personal settings for the Valentine's invite.
// Add the actual relationship start date to enable the elapsed-time counter.
export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  yourName: "Ezekiel",
  partnerName: "Preciously",
  relationshipStart: "",
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
