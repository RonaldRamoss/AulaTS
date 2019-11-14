class Pessoa{
    private nome: string;
    private idade: number;

    olamundo():string{
        return "Heloo World father is on";
    }
}

let p = new Pessoa();

document.getElementById('titulo').textContent = p.olamundo();
