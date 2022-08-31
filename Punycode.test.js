import * as t from "https://deno.land/std/testing/asserts.ts";
import { Punycode } from "./Punycode.js";

Deno.test("encode", () => {
  //t.assertEquals(Punycode.encode("コメント"), "tckhb8e6e");
  t.assertEquals(Punycode.encode("ドメイン名例"), "tckhb8e6e");
  // xn--tckhb8e6e.net ムシナコシ
  // xn--tckzb0d6c.net
});
Deno.test("decode", () => {
  t.assertEquals(Punycode.decode("tckhb8e6e"), "コメント");
});
