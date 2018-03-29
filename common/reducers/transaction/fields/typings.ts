import {
  SetToFieldAction,
  SetDataFieldAction,
  SetNonceFieldAction,
  SetGasLimitFieldAction,
  SetWindowSizeFieldAction,
  SetWindowStartFieldAction,
  SetScheduleTimestampFieldAction,
  SetScheduleTypeAction,
  SetScheduleGasPriceFieldAction
} from 'actions/transaction';
import { Wei } from 'libs/units';

export interface State {
  to: SetToFieldAction['payload'];
  data: SetDataFieldAction['payload'];
  nonce: SetNonceFieldAction['payload'];
  value: { raw: string; value: Wei | null }; // TODO: fix this workaround since some of the payload is optional
  gasLimit: SetGasLimitFieldAction['payload'];
  gasPrice: { raw: string; value: Wei };
  timeBounty: { raw: string; value: Wei };
  windowSize: SetWindowSizeFieldAction['payload'];
  windowStart: SetWindowStartFieldAction['payload'];
  scheduleTimestamp: SetScheduleTimestampFieldAction['payload'];
  scheduleType: SetScheduleTypeAction['payload'];
  scheduleGasPrice: SetScheduleGasPriceFieldAction['payload'];
}
