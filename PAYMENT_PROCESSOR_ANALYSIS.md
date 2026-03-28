415 CUSTOMZ — PAYMENT PROCESSOR ANALYSIS
Purpose: Evaluate payment processing options for 415customz.com — a static HTML/CSS/JS storefront selling ebike performance parts. No backend exists currently. Average transaction ~$200–$500. Low transaction volume.


REQUIREMENTS
• Static HTML site — no server-side code (pure client-side JS)
• Works with shared hosting or GitHub Pages (no Node/PHP backend)
• Supports both card payments and alternative methods (PayPal, etc.)
• Low volume, moderate ticket ($200–$500 avg)
• Owner OK to manage account and handle disputes manually
• International customers (Canada, EU, Australia) likely for ebike parts


OPTIONS AT A GLANCE

Option A — Stripe Payment Links + Checkout [RECOMMENDED]
No code needed. Create payment links per product in Stripe Dashboard. Customer clicks → Stripe-hosted page → done. Works on any static site.

Option B — PayPal Commerce (Buttons)
Embed PayPal Smart Buttons on the site. Requires a PayPal Business account and minimal JS snippet. No backend needed.

Option C — Stripe + PayPal together
Best conversion — give customers both options. Stripe for cards, PayPal as fallback. More integration work but proven to increase completion rates.

Option D — Square Online + Redirect
Use Square's free online store as the payment layer. Embed a Square checkout button that redirects to Square's hosted page.


DETAILED COMPARISON

STRIPE
Fees: 2.9% + $0.30 per transaction

Pros:
• Industry standard — most trusted by developers and businesses
• Payment Links work on purely static sites (no backend required)
• Dashboard gives you full transaction history, refunds, disputes
• Stripe Radar fraud detection built in
• Supports Apple Pay / Google Pay automatically
• Global multi-currency support
• Payouts to your bank account directly

Cons:
• Requires business verification (Sole Proprietor OK with SSN)
• Chargeback dispute process can be manual
• Payouts: 2 business days standard
• Account banned in some high-risk categories (CBD, certain supplements)

Integration effort for 415customz: LOW
Payment Links require zero code. For embedded card form: moderate.

Use case for 415customz: Payment Links per product → link in cart checkout modal. Or replace entire checkout form with Stripe-hosted page redirect.


PAYPAL COMMERCE
Fees: 2.99% + $0.49 standard; 3.49% + $0.49 for PayPal wallet checkout

Pros:
• Massive brand trust — 400M+ active accounts. Some customers only have PayPal.
• Buy Now Pay Later (Pay Later) included — split payments, no extra cost to merchant
• Very easy button integration (copy-paste JS snippet)
• Strong seller protection for physical goods
• Easy refunds and dispute handling

Cons:
• Higher fees than Stripe
• Checkout is off-site (redirects to PayPal)
• Account frozen risk if PayPal flags activity spikes (new account concern)
• Less polished UI than Stripe Checkout

Integration effort for 415customz: VERY LOW — 1 PayPal JS snippet, 5 minutes.

Use case for 415customz: Add PayPal as second option alongside Stripe for customers who don't want to enter card details.


SQUARE
Fees: 2.9% + $0.30 online; 2.6% + $0.10 in-person

Pros:
• Good if there's any physical retail / events
• Free POS app turns any device into checkout
• Unified inventory across online and in-person

Cons:
• Online payments less developer-friendly than Stripe
• No native Payment Link equivalent for static sites (needs redirect or API)
• Less common for pure online ebike parts business

Integration effort for 415customz: MEDIUM — Square Checkout redirect or eCommerce API integration. Not ideal for pure static site.

Use case for 415customz: Only if you also do events/markets/fairs.


IMPLEMENTATION PATHS FOR 415CUSTOMZ

PATH 1: STRIPE PAYMENT LINKS (Simplest — Zero Code)
1. Create Stripe account (stripe.com)
2. Add products in Stripe Dashboard manually
3. Generate a Payment Link per product
4. In index.html, when user clicks "Place Order":
   → Build cart summary → show modal with Stripe Payment Links per product
   → Or redirect to hosted payment page
5. Stripe handles the rest — card entry, receipt, email confirmation

Pros: Zero backend, zero code, fully hosted by Stripe.
Cons: Manual product sync if catalog changes often.

Timeline: Live in 1-2 days.


PATH 2: STRIPE + PAYPAL TOGETHER (Best Conversion)
1. Set up Stripe Payment Links as primary
2. Add PayPal Smart Buttons via their JS snippet
3. Customer picks card OR PayPal at checkout
4. Both redirect back to "Order Confirmed" page on your site

Pros: Maximum checkout conversion — give customers choice.
Cons: Slightly more work, two accounts to manage.

Timeline: Live in 3-5 days.


PATH 3: FULL CHECKOUT REDESIGN (Biggest Lift)
Replace the checkout section in index.html with Stripe Checkout (Stripe-hosted payment page). Stripe creates the session, hosts the payment page, you handle post-payment confirmation on your site.

Pros: Most polished, Stripe handles everything.
Cons: Requires replacing the existing checkout form in HTML/JS.

Timeline: 1-2 weeks.


REGULATORY / LEGAL NOTES
• Sole proprietorship OK for all three — you can use SSN for verification
• For ebike parts shipped internationally: Stripe handles VAT/duties at checkout via Stripe Tax (paid by customer)
• PayPal has stronger seller protection for physical goods vs. digital
• Square offers inventory sync if you ever add a POS
• All three report income to IRS (1099-K threshold: $5,000 gross in 2026 proposals)
• Chargeback risk: lower with physical goods — ebike parts are relatively safe


RECOMMENDATION FOR 415CUSTOMZ

Go with Stripe Payment Links as the first step — fastest path from no payments to accepting payments on a static site.

Priority order:
1. Stripe Payment Links (zero code, works tomorrow)
2. Add PayPal Smart Buttons after — 20 min work, proven to lift conversion
3. Consider Square only if you start doing events/markets

Key criteria met: works on static HTML, card + alternative methods, manageable at low volume, good for international.


NEXT STEPS (when ready to implement)
1. Create Stripe account at stripe.com — have bank account ready
2. Verify business (sole prop with SSN works)
3. Add top products in Stripe Dashboard → generate Payment Links
4. Test with a small payment to yourself
5. Wire up Place Order button → Payment Link
6. Add PayPal as second option
7. Monitor chargebacks — should be very low for ebike parts

Sources: Stripe.com pricing page, PayPal.com business fees, Squareup.com/online fees, ProPicked payment processor comparison 2026, Stripe & PayPal official docs.
