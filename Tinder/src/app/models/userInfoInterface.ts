import { ModelInterface } from './modelInterface';
import { SexualOrientationInterface } from './sexualOrientationInterface';
import { PersonalInformationInterface } from './personalInformationInterface';
import { CredentialsInfo } from './credentialsInfo';

export interface UserInfoInterface {
  credentialsInfo: CredentialsInfo;
  gender: ModelInterface;
  sexualOrientation: SexualOrientationInterface;
  genderToShow: ModelInterface;
  personalInformation: PersonalInformationInterface;
}
