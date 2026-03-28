import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Truck size={24} />,
      title: "Free Shipping",
      desc: "On all orders over $150"
    },
    {
      icon: <RotateCcw size={24} />,
      title: "Easy Returns",
      desc: "30-day risk-free returns"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure Payment",
      desc: "100% encrypted checkout"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
      {badges.map((badge, i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-3">
          <div className="text-gray-900">{badge.icon}</div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest">{badge.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
