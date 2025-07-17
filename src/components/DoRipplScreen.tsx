import { ArrowLeft, Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface DoRipplScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

export const DoRipplScreen = ({ onComplete, onBack }: DoRipplScreenProps) => {
  const [reflection, setReflection] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = () => {
    // Simulate image upload
    setImageUploaded(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mr-3 p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold text-foreground">Do Rippl</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Action Details */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground leading-tight">
            Plant a tree in your neighborhood
          </h2>
          <p className="text-muted-foreground">
            Find a suitable location and plant a native tree species. Take a photo of your planted tree as proof of completion.
          </p>
        </div>

        {/* Reflection Section */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            How did it feel? (optional)
          </label>
          <Textarea
            placeholder="Share your thoughts about this experience..."
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Proof of completion
          </label>
          <button
            onClick={handleImageUpload}
            className={`
              w-full aspect-square border-2 border-dashed rounded-2xl 
              flex flex-col items-center justify-center gap-3 
              transition-all duration-200 hover:border-primary/50
              ${imageUploaded 
                ? 'border-success bg-success/5 text-success' 
                : 'border-muted-foreground/30 bg-muted/20 text-muted-foreground hover:text-primary'
              }
            `}
          >
            {imageUploaded ? (
              <>
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium">Photo uploaded!</div>
                  <div className="text-sm opacity-70">Tap to change</div>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium">Add photo</div>
                  <div className="text-sm opacity-70">Take or choose from gallery</div>
                </div>
              </>
            )}
          </button>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="p-6 border-t border-border">
        <Button 
          onClick={onComplete}
          disabled={!imageUploaded}
          className="w-full h-14 text-lg font-semibold bg-gradient-teal-blue text-white shadow-glow"
        >
          I did it! 🌱
        </Button>
      </div>
    </div>
  );
};