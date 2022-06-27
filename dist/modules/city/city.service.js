"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const city_repository_1 = require("./city.repository");
let CityService = class CityService extends crud_service_1.CrudService {
    constructor(cityRepository) {
        super(cityRepository);
        this.cityRepository = cityRepository;
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [city_repository_1.CityRepository])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map