export type Category = "Skincare" | "Waxing" | "Nails" | "Lashes & Brows" | "Massage";

export type Treatment = {
  id: string;
  name: string;
  category: Category;
  minutes: number;
  price: number;
  signature?: boolean;
};

export const categories: { name: Category; intro: string }[] = [
  { name: "Skincare", intro: "Clinical facials for brighter, smoother, calmer skin." },
  { name: "Lashes & Brows", intro: "Lifts, tints and lamination that last for weeks." },
  { name: "Waxing", intro: "Quick, careful waxing, with hot wax for intimate areas." },
  { name: "Nails", intro: "Neat, long-wearing gel, BIAB and classic polish." },
  { name: "Massage", intro: "Swedish and hot stone massage to undo a long week." },
];

const raw: [Category, string, number, number, boolean?][] = [
  ["Skincare", "Clinicare Carboxy Facial", 50, 80, true],
  ["Skincare", "Clinicare Skin Peel System", 45, 70],
  ["Skincare", "Express & Glow Facial", 30, 35],
  ["Skincare", "Microdermabrasion Facial", 60, 70],
  ["Skincare", "Microneedling", 60, 100],

  ["Waxing", "Lip or Chin", 10, 8],
  ["Waxing", "Eyebrow Shaping", 15, 12],
  ["Waxing", "Half Arm", 20, 15],
  ["Waxing", "Underarm", 20, 18],
  ["Waxing", "Bikini Line", 15, 23],
  ["Waxing", "Half Leg", 30, 25],
  ["Waxing", "Full Arm", 20, 26],
  ["Waxing", "Extended Bikini", 20, 27],
  ["Waxing", "Chest or Back", 30, 28],
  ["Waxing", "Three Quarter Leg", 30, 30],
  ["Waxing", "Full Leg", 40, 35],
  ["Waxing", "Hollywood / Brazilian (hot wax)", 30, 36, true],
  ["Waxing", "Half Leg + Bikini Line", 45, 42],
  ["Waxing", "Full Leg + Bikini Line", 40, 52],
  ["Waxing", "Full Leg + Hollywood / Brazilian", 75, 68],

  ["Nails", "Nail Shape & Standard Polish", 40, 20],
  ["Nails", "Gel Removal & Tidy", 30, 18],
  ["Nails", "Nail Shape & Gel Polish", 45, 32],
  ["Nails", "Manicure with Standard Polish", 60, 35],
  ["Nails", "Pedicure with Standard Polish", 60, 35],
  ["Nails", "BIAB", 60, 36],
  ["Nails", "Gel Manicure", 60, 45],
  ["Nails", "Gel Pedicure", 60, 45],
  ["Nails", "Manicure & Pedicure, Standard Polish", 105, 65],
  ["Nails", "Gel Manicure & Pedicure", 105, 85],

  ["Lashes & Brows", "Eyebrow Tint", 20, 12],
  ["Lashes & Brows", "Eyelash Tint", 20, 18],
  ["Lashes & Brows", "Eyebrow Tint & Shape", 30, 22],
  ["Lashes & Brows", "Eyelash & Eyebrow Tint", 40, 28],
  ["Lashes & Brows", "Eyelash & Eyebrow Tint & Shape", 60, 38],
  ["Lashes & Brows", "Brow Lamination (incl. Tint & Shape)", 45, 45],
  ["Lashes & Brows", "Lash Lift (incl. Tint)", 60, 45, true],
  ["Lashes & Brows", "Lash Lift & Tint with Brow Lamination", 80, 80],

  ["Massage", "Swedish Massage, Back", 30, 35],
  ["Massage", "Swedish Massage, Back, Neck & Shoulder", 45, 45],
  ["Massage", "Hot Stone Massage", 40, 47],
  ["Massage", "Swedish Massage, Full Body", 60, 60],
  ["Massage", "Hot Stone Massage", 60, 67],
];

export const treatments: Treatment[] = raw.map(([category, name, minutes, price, signature], i) => ({
  id: `t${i}`,
  name,
  category,
  minutes,
  price,
  signature,
}));

export function formatMinutes(total: number) {
  if (total < 60) return `${total} mins`;
  const h = Math.floor(total / 60);
  const m = total % 60;
  const hrs = `${h} hr${h > 1 ? "s" : ""}`;
  return m ? `${hrs} ${m} mins` : hrs;
}
