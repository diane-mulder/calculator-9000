import React from "react";
import { useState } from "react";

import BeautifulScreen from "./BeautifulScreen";
import EqualButton from "./EqualButton";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ResetButton from "./ResetButton";
import ItsOverNineThousand from "./ItsOverNineThousand";

// definir le composant principal
function Calculator() { 
    const [currentOperation, setCurrentOperation] = useState(''); //pour la saisie actuelle
    const [result, setResult] = useState(''); //pour le résultat de calcul

    // gère le clic sur les boutons numériques
    function handleNumberClick(value){ 
        setCurrentOperation(prev => prev + value); // Met à jour la saisie actuelle avec le chiffre cliqué
    }
    // gère le clic sur les boutions opérateurs
    function handleOperatorClick(value){
        setCurrentOperation(prev => prev + value);
    }
    // gère le clic sur le bouton égalité
    function handleEqualClick(){
        try {
            // évalue l'expression et met à jour le resultat
            const expressionEvaluate = result ? result + currentOperation : currentOperation;
                setResult(eval(expressionEvaluate));
                setCurrentOperation('');// reinitialise la saisie actuelle
        }   catch (e) {
                setResult('Error');//En cas d'erreur d'évaluation
            }
}
    // gère le clic sur le bouton reset
    function handleResetClick() {
        setResult('');//reinitialise le résultat
        setCurrentOperation('');//réinitialise la saisie actuelle
    }

    //rendu du composant Calculator
    return (

        <div className="calculator">
            <ItsOverNineThousand value={result}/>
            <BeautifulScreen currentOperation={currentOperation} result={result}/>


            <div className="buttons-row">
            {['1', '2' , '3'].map(num =>(// créer la 1ère ligne de la calculette = touche 123 et /
                <NumberButton key={num} value={num} onClick={handleNumberClick}/>
                ))}
            {['/'].map(op =>(
                <OperatorButton key={op} value={op} onClick={handleOperatorClick}/>
            ))}    
            </div>
            <div className="buttons-row">
                {['4', '5' , '6'].map(num =>(// créer la 2eme ligne de la calculette = touche 456 et *
                    <NumberButton key={num} value={num} onClick={handleNumberClick}/>
                ))}
                {['*'].map(op =>(
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick}/>
                ))}    
            </div>
            <div className="buttons-row">    
                {['7', '8' , '9'].map(num =>(// créer la 3eme ligne de la calculette = touches 789 et +
                    <NumberButton key={num} value={num} onClick={handleNumberClick}/>
                ))}
                {['+'].map(op =>(
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick}/>
                ))}
            </div>
            <div className="buttons-row">   
                {['.'].map(num =>(// créer la 4eme ligne de la calculette = touches . 0 AC et -
                    <NumberButton key={num} value={num} onClick={handleOperatorClick}/>
                ))}    
                {['0'].map(num =>(
                    <NumberButton key={num} value={num} onClick={handleNumberClick}/>
                ))}
                <ResetButton onClick={handleResetClick}/>   
                {['-'].map(op =>(
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick}/>
                ))}
            </div>  

            <div className="equals">
                <EqualButton onClick={handleEqualClick}/>
            </div>
             
        </div>
    );
}

export default Calculator;