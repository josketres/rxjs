import {Observable} from '../../Observable';
import {skip} from '../../operator/skip';
Observable.prototype.skip = skip;