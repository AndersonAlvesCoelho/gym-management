import { AddressModel } from '../model/address.model';
import viacepApi from '../viacep';

export const getAddressViaCep = async (
  cep: string
): Promise<AddressModel | null> => {
  try {
    const request = await viacepApi.get(cep + '/json/');
    return request.data;
  } catch (error) {
    return null;
  }
};
