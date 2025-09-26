import { FaBullseye, FaCalendarAlt, FaSave, FaHistory, FaLightbulb, FaUsers } from "react-icons/fa";

export default function Apropos() {
  return (
    <div className="py-16  from-yellow-50 to-red-100 min-h-[calc(100vh-200px)]">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-center text-3xl font-extrabold text-[#764613] mb-8">
          À propos d'ArtConnect Maroc
        </h1>

        {/* Notre mission */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6 border">
          <div className="flex gap-4 items-start">
            <FaBullseye className="text-3xl text-[#895525] mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-[#763613] mb-2">Notre mission</h2>
              <p className="text-gray-600 leading-relaxed">
                ArtConnect Maroc a pour objectif de <strong>promouvoir et préserver l'art et la culture marocaine</strong>.
                Nous connectons artistes, artisans et passionnés de culture à travers le royaume
                pour partager et célébrer la richesse du patrimoine marocain.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que vous pouvez faire */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-[#763613] mb-4">Ce que vous pouvez faire</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow border flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-[#FFF5E6]">
                  <FaCalendarAlt className="text-[#895525]" />
                </div>
                <h4 className="font-semibold text-[#763613]">Explorer les créations</h4>
              </div>
              <p className="text-sm text-gray-600">
                Découvrir peintures, artisanat, architecture, gastronomie et habits traditionnels par région ou style.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow border flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-[#FFF5E6]">
                  <FaCalendarAlt className="text-[#895525]" />
                </div>
                <h4 className="font-semibold text-[#763613]">Participer aux événements</h4>
              </div>
              <p className="text-sm text-gray-600">
                Suivre et participer à des événements culturels pour vivre l'art marocain en direct.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow border flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-[#FFF5E6]">
                  <FaSave className="text-[#895525]" />
                </div>
                <h4 className="font-semibold text-[#763613]">Sauvegarder vos favoris</h4>
              </div>
              <p className="text-sm text-gray-600">
                Ajoutez vos œuvres et traditions préférées à vos favoris pour les retrouver facilement.
              </p>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6 border">
          <div className="flex gap-4 items-start">
            <FaHistory className="text-3xl text-[#895525] mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-[#763613] mb-2">Notre histoire</h2>
              <p className="text-gray-600 leading-relaxed">
                Depuis sa création en <strong>2025</strong>, ArtConnect Maroc a recensé plus de
                <strong> 200 traditions et œuvres</strong> à travers le pays. La plateforme vise à
                <em> mettre en lumière les talents locaux</em> et à transmettre le savoir-faire marocain aux nouvelles générations.
              </p>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-[#763613] mb-4">Nos valeurs</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg p-6 shadow border bg-[#FFF0EE]">
              <div className="flex items-center gap-3 mb-3">
                <FaLightbulb className="text-2xl text-[#C97340]" />
                <h4 className="font-semibold text-[#763613]">Innovation</h4>
              </div>
              <p className="text-sm text-gray-600">Encourager de nouvelles créations et formes artistiques.</p>
            </div>

            <div className="rounded-lg p-6 shadow border bg-[#FFF5E6]">
              <div className="flex items-center gap-3 mb-3">
                <FaUsers className="text-2xl text-[#C97340]" />
                <h4 className="font-semibold text-[#763613]">Communauté</h4>
              </div>
              <p className="text-sm text-gray-600">Créer un espace où artistes et amateurs partagent leurs passions.</p>
            </div>

            <div className="rounded-lg p-6 shadow border bg-[#FFF7F3]">
              <div className="flex items-center gap-3 mb-3">
                <FaBullseye className="text-2xl text-[#C97340]" />
                <h4 className="font-semibold text-[#763613]">Authenticité</h4>
              </div>
              <p className="text-sm text-gray-600">Respecter et valoriser l'héritage culturel marocain.</p>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}
