import { FaceSmileIcon, CameraIcon, XMarkIcon, CodeBracketIcon, PlayIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-gray-600 text-sm">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700"><FaceSmileIcon className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-gray-700"><CameraIcon className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-gray-700"><XMarkIcon className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-gray-700"><CodeBracketIcon className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500 hover:text-gray-700"><PlayIcon className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
