import { ModelInterface } from './modelInterface'
import { SexualOrientationInterface } from './sexualOrientationInterface';
import { PersonalInformationInterface } from './personalInformationInterface';


export interface UserInfoInterface {
    gender: ModelInterface,
    sexualOrientation: SexualOrientationInterface,
    genderToShow: ModelInterface,
    personalInformation: PersonalInformationInterface,
}