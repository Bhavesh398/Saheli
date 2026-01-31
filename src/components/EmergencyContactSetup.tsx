import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Phone, User, Check } from 'lucide-react';

interface EmergencyContactSetupProps {
    onComplete: (contact: { name: string; phone: string }) => void;
}

export const EmergencyContactSetup = ({ onComplete }: EmergencyContactSetupProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const validatePhone = (phoneNumber: string) => {
        // Remove all non-digits
        const cleaned = phoneNumber.replace(/\D/g, '');
        // Check if it's a valid 10-digit number
        return cleaned.length === 10;
    };

    const handleSave = () => {
        if (!name.trim()) {
            setError('Please enter a contact name');
            return;
        }

        if (!validatePhone(phone)) {
            setError('Please enter a valid 10-digit phone number');
            return;
        }

        const cleanedPhone = phone.replace(/\D/g, '');
        localStorage.setItem('emergencyContact', JSON.stringify({
            name: name.trim(),
            phone: cleanedPhone
        }));

        onComplete({ name: name.trim(), phone: cleanedPhone });
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center p-6 z-50">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4 border-2 border-red-500">
                        <Shield className="w-10 h-10 text-red-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Emergency Contact
                    </h1>
                    <p className="text-white/70 text-sm">
                        Set up your emergency contact to receive alerts and evidence when you trigger the panic button
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-white/90 text-sm font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Contact Name
                        </label>
                        <Input
                            type="text"
                            placeholder="e.g., Mom, Dad, Friend"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError('');
                            }}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/50"
                        />
                    </div>

                    {/* Phone Input */}
                    <div>
                        <label className="block text-white/90 text-sm font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            placeholder="10-digit mobile number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setError('');
                            }}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/50"
                            maxLength={10}
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                            <p className="text-red-200 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Info Box */}
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3">
                        <p className="text-blue-200 text-xs">
                            💡 This contact will receive an SMS with the location and evidence when you trigger an emergency
                        </p>
                    </div>

                    {/* Save Button */}
                    <Button
                        onClick={handleSave}
                        className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-6 text-lg shadow-lg"
                        size="lg"
                    >
                        <Check className="w-5 h-5 mr-2" />
                        Save Emergency Contact
                    </Button>

                    {/* Skip Option */}
                    <Button
                        onClick={() => onComplete({ name: '', phone: '' })}
                        variant="ghost"
                        className="w-full text-white/60 hover:text-white/90"
                    >
                        Skip for now
                    </Button>
                </div>
            </div>
        </div>
    );
};
