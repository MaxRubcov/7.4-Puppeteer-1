let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
      await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const expected = "GitHub for teams · Build like the best teams on the planet · GitHub";
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual(expected);
  }, 60000);

  test("The first link attribute", async () => {
    const expected = "#start-of-content";
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual(expected);
  }, 60000);

  test("The page contains Sign in button", async () => {
    const expected = "Sign up for free";
    const btnSelector = "div[class='col-md-8 col-lg-10 col-xl-12 text-center mx-auto my-5 my-sm-0'] a[class='btn-mktg btn-large-mktg btn-muted-mktg']";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain(expected);
  }, 60000);
});

test("The h1 header content'", async () => {
  const expected = "GitHub: Let’s build from here · GitHub";
  await page.goto("https://github.com/home");
  const firstLink = await page.$("header[role='banner']");
  await firstLink.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
   expect(title2).toContain(expected);
}, 60000);

test("The h1 header content'", async () => {
  const expected = "Features • GitHub Actions · GitHub";
  await page.goto("https://github.com/features/actions");
  const firstLink = await page.$("header[role='banner']");
  await firstLink.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
   expect(title2).toContain(expected);
}, 60000);

test("The h1 header content'", async () => {
  const expected = "GitHub Discussions · Developer Collaboration & Communication Tool · GitHub";
  await page.goto("https://github.com/features/discussions");
  const firstLink = await page.$("header[role='banner']");
  await firstLink.click();
  await page.waitForSelector('h1');
  const title2 = await page.title();
   expect(title2).toContain(expected);
}, 60000);

