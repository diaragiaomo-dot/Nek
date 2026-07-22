/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Biografia from "./pages/Biografia";
import Discografia from "./pages/Discografia";
import Canzoni from "./pages/Canzoni";
import Tour from "./pages/Tour";
import News from "./pages/News";
import Video from "./pages/Video";
import FanClub from "./pages/FanClub";
import Contatti from "./pages/Contatti";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="biografia" element={<Biografia />} />
          <Route path="discografia" element={<Discografia />} />
          <Route path="canzoni" element={<Canzoni />} />
          <Route path="tour" element={<Tour />} />
          <Route path="news" element={<News />} />
          <Route path="video" element={<Video />} />
          <Route path="fan-club" element={<FanClub />} />
          <Route path="contatti" element={<Contatti />} />
          
          {/* Fallback route for non-implemented pages to just show layout */}
          <Route path="*" element={
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Prossimamente</h1>
              <p className="text-gray-400 text-lg max-w-lg">Questa sezione è attualmente in fase di sviluppo. Torna presto per scoprire le novità!</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
