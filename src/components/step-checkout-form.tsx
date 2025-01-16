import React, { useState } from 'react'

export function StepCheckoutForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    genero: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold">Dados Pessoais</h3>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={handleInputChange}
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu endereço de e-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="Digite seu telefone"
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">
                  CPF
                </label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  placeholder="Digite seu CPF"
                  onChange={handleInputChange}
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">
                Gênero
              </label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              >
                <option value="">Selecione uma opção</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold">Endereço de cobrança</h3>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                CEP
              </label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                placeholder="Digite seu CEP"
                onChange={handleInputChange}
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Rua
              </label>
              <input
                type="text"
                name="rua"
                value={formData.rua}
                onChange={handleInputChange}
                placeholder="Digite sua rua"
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Número
                </label>
                <input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  placeholder="Digite o número da sua casa ou apartamento"
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleInputChange}
                  placeholder="Digite o complemento do seu endereço"
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold">Dados do Pagamento</h3>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Número do Cartão
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Digite o número do cartão"
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nome no cartão
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="Digite o nome que está no cartão"
                className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Validade
                </label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  placeholder="MM/AA"
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  maxLength={3}
                  name="cardCvv"
                  value={formData.cardCvv}
                  onChange={handleInputChange}
                  placeholder="Digite o código de segurança do cartão"
                  className="h-12 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition-all focus:ring-4 focus:ring-red-600"
                />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-8">
        <h2 className="text-md mb-5 border-l-4 border-l-red-700 pl-5 font-bold uppercase text-zinc-600 md:text-xl">
          Preencha as informações
        </h2>

        {/* Progress Steps */}
        {/* <div className="mb-8 flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  currentStep >= step.id
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <step.icon size={20} />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 h-1 w-full ${
                    currentStep > step.id ? 'bg-red-700' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div> */}

        {/* Form Content */}
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col justify-between gap-3 md:flex-row md:gap-0">
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              className="rounded-md border border-red-700 px-4 py-2 text-red-700 hover:bg-red-50"
            >
              Voltar uma etapa
            </button>
          )}
          <button
            onClick={
              currentStep === 3
                ? () => alert('Compra finalizada!')
                : handleNextStep
            }
            className="rounded-md bg-red-700 px-4 py-2 text-white hover:bg-red-800 md:ml-auto"
          >
            {currentStep === 3 ? 'Finalizar Compra' : 'Próxima etapa'}
          </button>
        </div>
      </div>
    </div>
  )
}
