import { render, screen } from '@testing-library/react'
import IndicatorMutuForm from '@/components/organisms/IndicatorMutuForm/IndicatorMutuForm'
import '@testing-library/jest-dom'

describe('IndicatorMutuForm', () => {
  it('renders form fields', () => {
    render(<IndicatorMutuForm />)
    expect(screen.getByLabelText(/Nama Indikator/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Deskripsi/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Target/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Verifikator/i)).toBeInTheDocument()
  })
})
