import React, { useEffect, useState } from "react";
import {
  QuiGon,
  ObiWan,
  ObiWanOld,
  DarthMaul,
  AhsokaHilt,
  AnakinHilt,
  VaderHilt,
  KyloHilt,
  LukeHilt,
  YodaHilt,
  MaceHilt,
  PloHilt,
  ReyHilt,
  SidiusHilt,
  DookuHilt,
  AhsokaLogo,
  AnakinLogo,
  DookuLogo,
  MaulLogo,
  SidiusLogo,
  VaderLogo,
  KyloLogo,
  LukeLogo,
  MaceLogo,
  ObiWanLogo,
  PloLogo,
  QuiGonLogo,
  ReyLogo,
  YodaLogo
  } from './images/images';

import './App.css';

function App() {

const initialValues = {
nonChosen: true,
blue: false,
red: false,
green: false,
purple: false,
yellow: false,
white: false,
};

const initialValuesHilts = {
  saberOne: true,
  quiGon: false,
  obiWanNew: false,
  obiWanOld: false,
  darthMaul: false,
  ahsokaTano: false,
  anakinHilt: false,
  vaderHilt: false,
  kyloHilt: false,
  lukeHilt: false,
  yodaHilt: false,
  maceHilt: false,
  ploHilt: false,
  reyHilt: false,
  sidiusHilt: false,
  dookuHilt: false
}

const [colors, setColors] = useState(initialValues);
const [hilts, setHilts] = useState(initialValuesHilts);




  return (
    <div className="App">

      <div className="grid">

    <div className="btns">
          {/* Colors */}
          <p className="white">Choose color:</p>
          <button className="clrbtn greenbtn" onClick={() => {setColors({...colors,green:true,white:false,yellow:false,purple:false,red:false,blue:false,nonChosen:false})}}></button>

          <button className="clrbtn bluebtn" onClick={() => {setColors({...colors,green:false,white:false,yellow:false,purple:false,red:false,blue:true,nonChosen:false})}}></button>

          <button className="clrbtn redbtn" onClick={() => {setColors({...colors,green:false,white:false,yellow:false,purple:false,red:true,blue:false,nonChosen:false})}}></button>

          <button className="clrbtn yellowbtn" onClick={() => {setColors({...colors,green:false,white:false,yellow:true,purple:false,red:false,blue:false,nonChosen:false})}}></button>

          <button className="clrbtn purplebtn" onClick={() => {setColors({...colors,green:false,white:false,yellow:false,purple:true,red:false,blue:false,nonChosen:false})}}></button>

          <button className="clrbtn whitebtn" onClick={() => {setColors({...colors,green:false,white:true,yellow:false,purple:false,red:false,blue:false,nonChosen:false})}}></button>


          
          <br />

          {/* Hilts */}

          <p className="white">Choose hilt:</p>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:true,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Qui Gon</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:true,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Obi Wan Kenobi #1</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:true,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Obi Wan Kenobi #2</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:true,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Anakin Skywalker</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:true,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Luke Skywalker</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:true,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Yoda</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:true,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Mace Windu</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:true,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Plo Koon</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:true,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Ahsoka Tano</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:true,sidiusHilt:false,dookuHilt:false})}}>Rey Skywalker</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:true,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Darth Vader</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:true,dookuHilt:false})}}>Darth Sidious</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:true,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Darth Maul</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:true,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:false})}}>Kylo Ren</button>

          <button className="testsub" onClick={() => {setHilts({...hilts,quiGon:false,obiWanNew:false,obiWanOld:false,saberOne:false,darthMaul:false,asokaTano:false,anakinHilt:false,vaderHilt:false,kyloHilt:false,lukeHilt:false,yodaHilt:false,maceHilt:false,ploHilt:false,reyHilt:false,sidiusHilt:false,dookuHilt:true})}}>Count Dooku</button>
          </div>

          <div className="hilts">

<div class="lightsaber">
  <input type="checkbox" id="on-off" />

        {/* Color Picker */}

          {colors.nonChosen && (
            <>
            <div className="blade clr-green"></div>

            {hilts.darthMaul ? 
             <div className="blade2 clr-green"></div>
            :
              <>
              </>
            }

            {hilts.kyloHilt ? 
            <>
             <div className="blade3 clr-green"></div>
             <div className="blade4 clr-green"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}

          {colors.blue && (
            <>
          <div className="blade clr-blue"></div>

            {hilts.darthMaul ? 
             <div className="blade2 clr-blue"></div>
            :
              <>
              </>
            }

            {hilts.kyloHilt ? 
            <>
             <div className="blade3 clr-blue"></div>
             <div className="blade4 clr-blue"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}


          {colors.red && (
            <>
          <div className="blade red-clr"></div>

            {hilts.darthMaul ? 
             <div className="blade2 red-clr"></div>
            :
              <>
              </>
            }

            {hilts.kyloHilt ? 
            <>
             <div className="blade3 red-clr"></div>
             <div className="blade4 red-clr"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}

          {colors.green && (
            <>
          <div className="blade clr-green"></div>

           {hilts.darthMaul ? 
             <div className="blade2 clr-green"></div>
            :
              <>
              </>
            }

          {hilts.kyloHilt ? 
            <>
             <div className="blade3 clr-green"></div>
             <div className="blade4 clr-green"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}

          {colors.purple && (
            <>
          <div className="blade purple-clr"></div>

            {hilts.darthMaul ? 
             <div className="blade2 purple-clr"></div>
            :
              <>
              </>
            }

          {hilts.kyloHilt ? 
            <>
             <div className="blade3 purple-clr"></div>
             <div className="blade4 purple-clr"></div>
             </>
            :
              <>
              </>
            }
            
          </>
          )}

          {colors.yellow && (
            <>
          <div className="blade yellow-clr"></div>

            {hilts.darthMaul ? 
             <div className="blade2 yellow-clr"></div>
            :
              <>
              </>
            }

          {hilts.kyloHilt ? 
            <>
             <div className="blade3 yellow-clr"></div>
             <div className="blade4 yellow-clr"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}

          {colors.white && (
            <>
          <div className="blade white-clr"></div>
                  

            {hilts.darthMaul ? 
             <div className="blade2 white-clr"></div>
            :
              <>
              </>
            }

          {hilts.kyloHilt ? 
            <>
             <div className="blade3 white-clr"></div>
             <div className="blade4 white-clr"></div>
             </>
            :
              <>
              </>
            }

          </>
          )}


            {/* Hilt Picker */}

        {hilts.saberOne && (
          <>
            <label className="hilt" for="on-off">
              <QuiGon />
            </label>
                <div className="infobox">
                  <QuiGonLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Qui Gon Jinn.</p>
                  <p>Saber color: <span className="green">Green</span>.</p>
                  <p>Hilth length: 28.5 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
          </>
          )}

        {hilts.quiGon && (
          <>
              <label className="hilt" for="on-off">
              <QuiGon />
            </label>
                <div className="infobox">
                  <QuiGonLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Qui Gon Jinn.</p>
                  <p>Saber color: <span className="green">Green</span>.</p>
                  <p>Hilth length: 28.5 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
                </>
          )}

        {hilts.obiWanNew && (
          <>
              <label className="hilt" for="on-off">
              <ObiWan />
            </label>
                <div className="infobox">
                  <ObiWanLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Second Saber Hilt of Obi Wan Kenobi.</p>
                  <p>Saber color: <span className="blue">Blue</span>.</p>
                  <p>Hilth length: 29.2 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.obiWanOld && (
          <>
              <label className="hilt" for="on-off">
              <ObiWanOld />
            </label>
                <div className="infobox">
                  <ObiWanLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>First Saber Hilt of Obi Wan Kenobi.</p>
                  <p>Saber color: <span className="blue">Blue</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.darthMaul && (
            <>
            <label className="hilt" for="on-off">
              <DarthMaul className="maulhilt" />
            </label>
                <div className="infobox">
                  <MaulLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Darth Maul.</p>
                  <p>Saber color: <span className="red">Red</span>.</p>
                  <p>Hilth length: 53.3 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="red">Sith</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.asokaTano && (
          <>
              <label className="hilt" for="on-off">
              <AhsokaHilt />
            </label>
                  <div className="infobox">
                  <AhsokaLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Ahsoka Tano.</p>
                  <p>Saber color: <span className="green">Green</span>/<span className="blue">Blue</span>.</p>
                  <p>(Later: White).</p>
                  <p>Hilth length: n/a.</p>
                  <p>Hilt material: Metallic.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.anakinHilt && (
          <>
              <label className="hilt" for="on-off">
              <AnakinHilt />
            </label>
                <div className="infobox">
                  <AnakinLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Anakin Skywalker.</p>
                  <p>Saber color: <span className="blue">Blue</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.vaderHilt && (
          <>
              <label className="hilt" for="on-off">
              <VaderHilt />
            </label>
                <div className="infobox">
                  <VaderLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Darth Vader.</p>
                  <p>Saber color: <span className="red">Red</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Alloy metal and carbon composite.</p>
                  <p>Affiliation: <span className="red">Sith</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.kyloHilt && (
          <>
            <label className="hilt" for="on-off">
              <KyloHilt className="hilt2"/>
            </label>
                <div className="infobox">
                  <KyloLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Kylo Ren.</p>
                  <p>Saber color: <span className="red">Red</span>.</p>
                  <p>Hilth length: 29.8 cm.</p>
                  <p>Hilt material: Heat-hardened industrial alloy.</p>
                  <p>Affiliation: <span className="red">First Order</span>.</p>
                  </div>
                </div>
            </>
          )}

        {hilts.lukeHilt && (
          <>
            <label className="hilt" for="on-off">
              <LukeHilt />
            </label>
                <div className="infobox">
                  <LukeLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Luke Skywalker.</p>
                  <p>Saber color: <span className="green">Green</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Alloy metal and salvaged materials.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.yodaHilt && (
            <>
            <label className="hilt" for="on-off">
              <YodaHilt />
            </label>
                <div className="infobox">
                  <YodaLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Master Yoda.</p>
                  <p>Saber color: <span className="green">Green</span>.</p>
                  <p>Hilth length: 15 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.maceHilt && (
            <>
            <label className="hilt" for="on-off">
              <MaceHilt />
            </label>
                <div className="infobox">
                  <MaceLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Mace Windu.</p>
                  <p>Saber color: <span className="purple">Purple</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Electrum-plated alloy.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.ploHilt && (
            <>
            <label className="hilt" for="on-off">
              <PloHilt />
            </label>
                <div className="infobox">
                  <PloLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Plo Koon.</p>
                  <p>Saber color: <span className="yellow">Yellow</span>/<span className="green">Green</span>.</p>
                  <p>Hilth length: 28 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.reyHilt && (
            <>
            <label className="hilt" for="on-off">
              <ReyHilt />
            </label>
                <div className="infobox">
                  <ReyLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Rey Skywalker.</p>
                  <p>Saber color: <span className="yellow">Yellow</span>.</p>
                  <p>Hilth length: 26 cm.</p>
                  <p>Hilt material: Salvaged material.</p>
                  <p>Affiliation: <span className="green">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.sidiusHilt && (
            <>
            <label className="hilt" for="on-off">
              <SidiusHilt />
            </label>
                <div className="infobox">
                  <SidiusLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Darth Sidious.</p>
                  <p>Saber color: <span className="red">Red</span>.</p>
                  <p>Hilth length: 19 cm.</p>
                  <p>Hilt material: Aurodium, Electrum finish, Phrik.</p>
                  <p>Affiliation: <span className="red">Sith</span>.</p>
                  </div>
                </div>
            </>
          )}

          {hilts.dookuHilt && (
            <>
            <label className="hilt" for="on-off">
              <DookuHilt />
            </label>
                <div className="infobox">
                  <DookuLogo className="logo-sizer"/>
                  <div className="infotxt">
                  <p>Saber Hilt of Count Dooku.</p>
                  <p>Saber color: <span className="red">Red</span>/<span className="blue">Blue</span>.</p>
                  <p>Hilth length: 35.5 cm.</p>
                  <p>Hilt material: Alloy metal.</p>
                  <p>Affiliation: <span className="red">Jedi Order</span>.</p>
                  </div>
                </div>
            </>
          )}
            
</div>

</div>

<div className="info">
</div>

    </div>
    </div>
  );
}

export default App;