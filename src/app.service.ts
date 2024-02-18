import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as https from 'https';

@Injectable()
export class AppService {
  async proxyClock() {
    try {
      const headers = {
        Accept: '*/*',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      };

      const result = await axios({
        url: 'https://www.rhid.com.br/v2/login.svc',
        method: 'POST',
        timeout: 3000,
        headers,
        data: {
          domain: null,
          email: 'lucas.dev@hublocal.com.br',
          password: 'waqescvs',
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });

      return result;
    } catch (e) {
      return e;
    }
  }
}
