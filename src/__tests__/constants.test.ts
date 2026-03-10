import { CONTACT, SOCIAL } from "@/lib/constants"
import { hospitals } from "@/lib/hospitals"

describe("Constants", () => {
  it("should have valid phone numbers", () => {
    expect(CONTACT.phones).toHaveLength(2)
    CONTACT.phones.forEach((p) => {
      expect(p.number).toMatch(/^\+213\d{9}$/)
      expect(p.display).toBeTruthy()
    })
  })

  it("should have a valid email", () => {
    expect(CONTACT.email).toMatch(/@/)
  })

  it("should have address in both languages", () => {
    expect(CONTACT.address.fr).toBeTruthy()
    expect(CONTACT.address.ar).toBeTruthy()
  })

  it("should have social media links", () => {
    expect(SOCIAL.tiktok).toMatch(/^https:\/\//)
    expect(SOCIAL.instagram).toMatch(/^https:\/\//)
  })
})

describe("Hospitals", () => {
  it("should have hospital data", () => {
    expect(hospitals.length).toBeGreaterThan(0)
  })

  it("should have required fields for each hospital", () => {
    hospitals.forEach((h) => {
      expect(h.nameFr).toBeTruthy()
      expect(h.nameAr).toBeTruthy()
      expect(h.area).toBeTruthy()
      expect(h.embed).toMatch(/google\.com\/maps/)
    })
  })
})
