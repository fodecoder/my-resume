const Contact = () => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#021518] to-[#00121a] border border-slate-700">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-slate-300">Email</div>
          <div className="font-semibold">foderaroandrea@gmail.com</div>
          <div className="text-slate-300 mt-2">Phone</div>
          <div className="font-semibold">(+39) 3332053692</div>
        </div>
        <div>
          <div className="text-slate-300">Links</div>
          <div className="flex gap-3 mt-2">
            <a className="underline" href="https://www.linkedin.com/in/andrea-simone-foderaro/">LinkedIn</a>
            <a className="underline" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;