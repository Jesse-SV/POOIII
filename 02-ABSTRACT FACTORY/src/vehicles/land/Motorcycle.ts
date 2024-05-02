import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{

    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando entrega...");
    }
    getCargo(): void {
        console.log("Moto: emcomenda retirada!");
    }
}