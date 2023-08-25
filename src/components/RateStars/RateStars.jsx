import rating from "../../Asset/rating.png"
import ratingless from "../../Asset/ratingless.png"


function Rates({ rateNum }) {
    const rates = Array(+rateNum)
        .fill(1)
        .concat(Array(5 - rateNum).fill(0));

    return (
        <div className="MainDivRate">
            {rates.map((rate, i) => {
                return (
                    //utilisation de l'operateur ternaire afin d'initier l'etoile pleine quand il y a rate === 1 ce qui
                    // permet de rajouter des etoiles pleine jusqu'à un nombre de 5 max sinon il rajoute des étoiles vide
                    <span key={`rate-${i}`}>
						{rate === 1 ? (
                            <img src={rating} alt="rating "/>
                        ) : (
                            <img src={ratingless} alt="rating_empty" />
                        )}
					</span>
                )
            })}
        </div>
    )
}

export default Rates
