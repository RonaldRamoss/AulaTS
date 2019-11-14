var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.olamundo = function () {
        return "Heloo World father is on";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById('titulo').textContent = p.olamundo();
