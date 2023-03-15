function handler(){
    const Form = document.forms.Form;
    const Text = Form.elements["pole_tekstowe"].value;
    const Num = +Form.elements["pole_liczbowe"].value;
    const Output = Form.elements.wynik;
    Output.innerHTML = Text + Num;
    console.log(`Wczytana wartość pola tekstowego: ${Text} \n Typ wczytanej wartosci ${typeof Text}`);
    console.log(`Wczytana wartość pola liczbowego ${Num} \n Typ wczytanej wartosci ${typeof Num}`)
}