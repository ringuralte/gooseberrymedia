import React from 'react'

import Layout from '../components/layout'
import aboutStyles from './about.module.scss'

const About = () => {
  return (
    <Layout transparent={false}>
      <div className={aboutStyles.wrapper}>
        <div className={aboutStyles.block}>
          <h2 className={aboutStyles.header}>About Us</h2>
          <p>Gooseberry studio is a state of the art recording and video studio set up to take your dreams into realities. For experienced and amateurs alike you will find us as a friendly team who can record and produce your music, videos and films professionally.</p>
          <p>We also have a fully equipped  two bedroom country cottage for those wanting to spend more time on their projects.</p>
          <p>The studio is set in the beautiful Sunhlukawn Country Park which is a natural jungle environment with lake, boating and country walks. Fishing is also available, with all fishing tackle for our registered guests.</p>
          <h2>Equipments Available</h2>
          <p>The recording studio has two main mixer desks, a Peavey 32FX-E powered console and a Soundcraft Signature 22 MTK (Multi-track) Analog mixer. This enables a massive 54 tracks to be recorded with up to 22 individual live tracks. The mixers feed multimedia computers through a range of professional software.</p>
          <p>The studio complex has comfortable seating, a vocal booth, control room with coffee bar and comfy sofas!</p>
          <h3>Drums</h3>
          <ul>
              <li>Mapex ST5255 Storm Series 5pcs Acoustic Flil Drum Kit</li>
              <li>Tama TSC4 Sonic Cowbell</li>
              <li>Stagg TIM JR 5/16 5-Piece Junior Drum Set</li>
          </ul>
          <h3>Guitars</h3>
          <ul>
              <li>Fender lead guitar</li>
              <li>Ibanez GSR180 Bass Guitar</li>
              <li>Cort CR50 Les Pali Style Electric Pro Guitar</li>
              <li>Fender Squier Blilet Strat with Tremulo Electric Pro Guitar</li>
              <li>Amaze AW41CE-101SP Electro-Acoustic Guitar</li>
          </ul>
          <h3>Microphones</h3>
          <ul>
              <li>Shure SM57-LC vocal microphones</li>
              <li>AKG Pro Audio Stage Pack D5 Vocal Dynamic Microphone</li>
              <li>Samson K5 Microphones</li>
              <li>7 Piece dedicated drum microphones</li>
          </ul>
          <h3>Electronics</h3>
          <ul>
              <li>Behringer iNuke NU1000P Amp PA</li>
              <li>Behringer EURulIVE VP1520 1000W 15" PA Speaker</li>
              <li>Behringer DI800 litra DI Pro direct injection box</li>
              <li>PreSonus Eris E5 2-way Active Studio Monitor/Speaker - Pair</li>
              <li>Hartke HYDRIVECOMBO25 Bass Guitar Combo 25W Amp</li>
              <li>Focusrite Scarlett 18i20 Audio Interface with 8 Mic Preamps</li>
              <li>Samson SR850 Professional Studio Reference Headphones</li>
              <li>Samson Powerbrite PB10 Pro Power Distribution Unit</li>
              <li>Bose RC-1 Loop Station</li>
          </ul>
          <h3>Keyboards</h3>
          <ul>
              <li>Casio WK-6600 High Grade Workstation 76-Key Keyboard</li>
              <li>Novation Launchkey</li>
              <li>Novation Launchpad</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
