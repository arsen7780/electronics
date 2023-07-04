import { HiArrowNarrowRight } from 'react-icons/hi';
export default function Homesection() {
    const section = ['Memory chip', 'Microprocessors', 'Microcontrollers', 'Application-specific integrated circuit (ASIC)', 'Digital signal processor (DSP)', 'Field-programmable gate array (FPGA)', 'Field-programmable analog array (FPAA)', 'System on chip (SOC)']
  return (
    <div className="home__section__container">
        <div className="home__section__left"></div>
        <div className="home__section__right">
            <h2>The Most Popular Electronic Brands</h2>
            <p>Electronics has hugely influenced the development of modern society. The identification of the electron in 1897, along with the subsequent invention of the vacuum tube which could amplify and rectify small electrical signals, inaugurated the field of electronics and the electron age. Practical applications started with the invention of the diode by Ambrose Fleming and the triode by Lee De Forest in the early 1900s, which made the detection of small electrical voltages such as radio signals from a radio antenna possible with a non-mechanical device.</p>
            <h2>Highly integrated devices</h2>
            <ul className="information__block" type="square">
                {section.map(item => {
                    return <div className="list__item" key={item}>
                      <li>{item}</li>
                      <HiArrowNarrowRight />
                    </div>
                })}
            </ul>
        </div>
    </div>
  )
}
