# Task C: API Scenario Questions

## C1. Proof of Xero API Connection

**Steps:**
1. Call the `/connections` endpoint.
2. Verify the returned response is successful (e.g., status code 200).
3. Ensure it lists available connections.

---

## C2. Diagnosis for /Invoices Failure

### Possible Checks:
- Authentication token validity.
- Permissions and invoice-specific scopes.
- API rate limits or throttling issues.
- Inspect error messages for clues (e.g., 400, 403, 429).

---

## C3. Endpoint for Checking Invoices

**Endpoint:** `GET /Invoices`
- Path: `/Invoices` (production API under `/accounting/{version}`).

---

## C4. Retrieve Single Invoice

**Request:**
**Endpoint** : `Invoices/{Id}` for one item lookup.
Supply exact **ID** linked.

Verify response:
- Status `200 OK` with invoice JSON.
- Check fields: `InvoiceID`, `InvoiceNumber`, `Status`, `AmountDue`, `LineItems`.


## C5. Handling 429 (Rate Limiting)

 Implement respectful retry with backoff using `Retry-After` when provided, exponential backoff with jitter otherwise, and fail gracefully if limits persist.
