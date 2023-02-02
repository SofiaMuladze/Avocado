import React from 'react'

import './AboutUs.css';
import About2 from '../../images/about/about2.svg'
import About3 from '../../images/about/about3.svg'
import About4 from '../../images/about/about4.svg'

function AboutUs() {
  return (
    <div>
        
        <div className='about-text'>
            <h1>What are the health benefits of a vegetarian diet?</h1>
            <p>There are many benefits to a vegetarian diet when it’s followed correctly. If you’re avoiding meat but only eating processed breads and pastas, excess sugar, and very little vegetables and fruits, you’re unlikely to reap many of the benefits of this diet.</p>
        </div>
        <div className='about-section'>
            <div className='text-card'>
                <h4>Good for heart health</h4>
                <p>Vegetarians may be up to one-thirdTrusted Source less likely to die or be hospitalized for heart disease. Of course, food choices matter — vegetarian or not.
                    If you want the heart-protective benefits of the diet, be sure to choose: high-fiber whole grains vegetables and fruits other low-glycemic foods The idea is to consume soluble fiber and choose foods that’ll help keep blood sugar levels stable. 
                    By doing so, you may reduce your cholesterol and overall risk of heart attack.
                </p>
            </div>
            <img src={About2} alt="" />
        </div>
        <div className='about-section'>
            <img src={About3} alt="" />
            <div className='text-card'>
                <h4>Reduces cancer risk</h4>
                <p>While the benefit isn’t significant, vegetarians may have a slight edge with lowering cancer risk.
                One studyTrusted Source found that, in low-risk populations, a vegetarian diet reduced the risk for cancer in general. Additionally, the study found that certain types of animal-free diets reduced the risk for specific types of cancer:
                a vegan diet was found to reduce risk for cancer more than other diets
                a vegan diet was also found to offer the most protection against female-specific cancers
                a lacto-ovo vegetarian diet was found to offer the most protection against cancers of the gastrointestinal tract
                </p>
            </div>
        </div>
        <div className='about-section'>
            <div className='text-card'>
                <h4>Prevents type 2 diabetes</h4>
                <p>Following a healthy vegetarian diet may help preventTrusted Source and treatTrusted Source type 2 diabetes and associated complications. It goes back to choosing low-glycemic foods that keep blood sugar levels steady, such as whole grains, legumes, and nuts.
                In one study, vegetarians had half the risk of developing type 2 diabetes compared with nonvegetarians.
                </p>
            </div>
            <img src={About4} alt="" />
        </div>

        <div className='about-section'>
            <img className='rotate-img' src={About2} alt="" />
            <div className='text-card'>
                <h4>Lowers blood pressure</h4>
                <p>Long ago, researchers started noticing that people who don’t eat meat may have lower blood pressure. Studies have shown that vegetarians, particularly vegans, have lower blood pressures than their meat-eating counterparts.
                Plant foods tend to be lower in fat, sodium, and cholesterol, which can have a positive effect on your blood pressure. Fruits and vegetables also have good concentrations of potassium, which helps to lower blood pressure.
                </p>
            </div>
        </div>
        <div className='about-section'>
            <div className='text-card'>
                <h4>Decreases asthma symptoms</h4>
                <p>An older Swedish study suggests that a vegetarian diet, specifically vegan, may decrease symptoms of asthma. Twenty-two out of 24 participants who ate a vegan diet for a year saw improvements, including less dependency on medications.
                It’s thought that certain animal foods may produce an allergy or inflammation response, so removing these foods from the diet can reduce these responses.
                </p>
            </div>
            <img className='rotate-img' src={About3} alt="" />

        </div>
        <div className='about-section'>
            <img className='rotate-img' src={About4} alt="" />
            <div className='text-card'>
                <h4>Promotes bone health</h4>
                <p>Osteoporosis rates are lower in countries where people eat mostly vegetarian diets. Animal products may actually force calcium out of the body, creating bone loss and osteoporosis.
                In one study, people who followed a lacto-ovo vegetarian diet for 20 years or more had only 18 percentTrusted Source less bone mineral by the time they reached age 80. Omnivores, or meat eaters, in this study had 35 percent less bone mineral at the same age.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs