import React from 'react';
import legendStyles from '../styles/legend.module.css';
import { titles, text } from '../constants/legend';

const Legend = ({ visitedFocus, setVisitedFocus, willvisitFocus, setWillvisitFocus }) => {

  const handleVisitedFocus = () => {
    willvisitFocus === 'willvisit-focus' ? setWillvisitFocus('willvisit-unfocus') : setWillvisitFocus('willvisit-focus');
  }

  const handleWillVisitFocus = () => {
    visitedFocus === 'visited-focus' ? setVisitedFocus('visited-unfocus') : setVisitedFocus('visited-focus');
  }

  return (
    <div className={legendStyles.legend}>
      {titles.map(title => {
        return (
          <div className={legendStyles.section} key={title.key}>
            <div className={legendStyles.title}>
              {title.desc}
            </div>
            {text.map(t => {
              let iconClass = `${title.key}-${t.key}`;
              let focusCities = (title.key === 'city' && t.key === 'visited') ? 
                handleVisitedFocus :
                  ((title.key === 'city' && t.key === 'willvisit') ? 
                    handleWillVisitFocus :
                      null);
              return (
                <div className={legendStyles.subsection} key={t.key} onClick={focusCities}>
                  <div className={legendStyles.iconContainer}>
                    <div className={`${legendStyles[iconClass]} ${legendStyles.icon}`} />
                  </div>
                  <div className={legendStyles.description}>
                    {t.desc}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
  
export default Legend;